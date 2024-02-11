export default class ListComputerPage {
  private readonly _url = '/computers'
  
  private readonly pageName = '#main > h1'
  private readonly alertMessage = '#main > div.alert-message.warning'
  private readonly addANewComputerButton = '#add'
  private readonly addANewComputerButtonText = 'Add a new computer'
  private readonly filterByNameInput = '#searchbox'
  private readonly filterByNamePlaceholder = 'Filter by computer name...'
  private readonly filterByNameButton = '#searchsubmit'
  private readonly filterByNameButtonText = 'Filter by name'
  private readonly firstRegister = '#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'
  private readonly paginationTable = '#pagination'

  getNumberOfComputersRegistered (): Cypress.Chainable<string> {
    return cy.get(this.pageName)
    .invoke('text')
    .then( (text) => {
      return text.trim().split(' ')[0]
    })
    .as('numComputers')
  }

  checkAlertComputerCreated(name: string): void {
    cy.get(this.alertMessage)
      .should('be.visible')
      .should('contain.text', `Done !  Computer ${name} has been created`) // ToDo: ISSUE-001
  }

  private checkPageLoaded (alertMessageText?: string): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName)
      .should('be.visible')
      .should('contain.text', 'computers found')
    cy.get(this.filterByNameInput)
      .should('be.visible')
      .should('have.attr', 'placeholder', this.filterByNamePlaceholder)
    cy.get(this.filterByNameButton)
      .should('be.visible')
      .should('have.value', this.filterByNameButtonText)
    cy.get(this.addANewComputerButton)
      .should('be.visible')
      .should('have.text', this.addANewComputerButtonText)
    if (alertMessageText) {
      cy.get(this.alertMessage)
        .should('be.visible')
        .should('contain.text', alertMessageText)
    }
  }

  load (): void {
    cy.visit(this._url)
    const number = this.getNumberOfComputersRegistered()
    cy.log(`Number of computers: ${number}`)
    this.getNumberOfComputersRegistered()
    // cy.get('@numComputers').should('have.text', 574)
    this.checkPageLoaded()
  }

  fillSearch (text: string): void {
    cy.get(this.filterByNameInput).should('be.visible').type(text)
  }

  search (): void {
    cy.get(this.filterByNameButton).should('be.visible').click()
  }

  getAddButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const addBtn = cy.get(this.addANewComputerButton)
    addBtn.should('be.visible')
    return addBtn
  }

  getFilterButton (): Cypress.Chainable<JQuery<HTMLElement>> {
    const findBtn = cy.get(this.filterByNameButton)
    findBtn.should('be.visible')
    return findBtn
  }

  searchAComputer (name: string): void {
    cy.get(this.filterByNameInput).type(name).should('have.value', name)
  }

  getFirstRegister (text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    const register = cy.get(this.firstRegister)
    register
      .should('be.be.visible')
      .should('contain.text', text)
    cy.get(this.paginationTable).should('be.visible')
    return register
  }
}
