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
  private readonly nothingToDisplayElement = '#main > div.well > em'
  private readonly nothingToDisplayText = 'Nothing to display'

  load(): void {
    cy.visit(this._url)
    this.checkPageLoaded()
  }

  getNumberOfComputersRegistered(): Cypress.Chainable<number> {
    return cy.get(this.pageName)
      .should('be.visible')
      .invoke('text')
      .then(text => parseInt(text.trim().split(' ')[0]))
  }

  checkAlertComputerCreated(name: string): void {
    cy.get(this.alertMessage)
      .should('be.visible')
      .should('contain.text', `Done !  Computer ${name} has been created`)
  }

  searchComputerByName(name: string): void {
    cy.get(this.filterByNameInput)
      .should('be.visible')
      .type(name)
    cy.get(this.filterByNameButton)
      .should('be.visible')
      .click()
  }

  getFirstComputerName(): Cypress.Chainable<string> {
    return cy.get(this.firstRegister)
      .should('be.visible')
      .invoke('text')
  }

  validateSearchComputer(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.firstRegister)
      .should('be.visible')
      .should('contain.text', text)
  }

  private checkPageLoaded(): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName)
      .should('be.visible')
      .should('contain.text', 'computers found')
    cy.get(this.filterByNameInput)
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Filter by computer name...')
    cy.get(this.filterByNameButton)
      .should('be.visible')
      .should('have.value', 'Filter by name')
    cy.get(this.addANewComputerButton)
      .should('be.visible')
      .should('have.text', 'Add a new computer')
  }
}
