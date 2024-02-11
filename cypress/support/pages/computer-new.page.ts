import * as _ from 'lodash'


export default class NewComputerPage {
  private readonly _url = '/computers/new'

  private readonly pageName = '#main > h1'
  private readonly computerNameInput = '#name'
  private readonly introducedInput = '#introduced'
  private readonly discontinuedInput = '#discontinued'
  private readonly companyDropDownMenu = '#company'
  private readonly createThisComputerButton = '#main > form > div > input'
  private readonly createThisComputerButtonText = 'Create this computer'
  private readonly cancelButton = '#main > form > div > a'
  private readonly cancelButtonText = 'Cancel'
  private readonly errorAlert =
    '#main > form > fieldset > div.clearfix.error > div > span'

  private checkPageLoaded(): void {
    cy.get('body').should('be.visible')
    cy.get(this.pageName).should('have.text', 'Add a computer')
    cy.get(this.computerNameInput).should('be.visible')
    cy.get(this.introducedInput).should('be.visible')
    cy.get(this.discontinuedInput).should('be.visible')
    cy.get(this.companyDropDownMenu).should('be.visible')
    cy.get(this.createThisComputerButton)
      .should('be.visible')
      .should('have.value', this.createThisComputerButtonText)
    cy.get(this.cancelButton)
      .should('be.visible')
      .should('have.text', this.cancelButtonText)
  }

  checkAlertError(alertMessage: string): void {
    cy.get(this.errorAlert)
      .should('be.visible')
      .should('contain.text', alertMessage)
  }

  load(): void {
    cy.visit(this._url)
    this.checkPageLoaded()
  }

  setNewComputerName(text?: string): void {
    cy.get(this.computerNameInput).type(text).should('have.value', text)
  }

  setIntroducedDate(text: string): void {
    cy.get(this.introducedInput).type(text).should('have.value', text)
  }

  setDiscontinuedDate(text: string): void {
    cy.get(this.discontinuedInput).type(text).should('have.value', text)
  }

  selectCompanyName(): void {
    const value = _.random(1, 10)
    cy.get(this.companyDropDownMenu).select(value).should('have.value', value)
  }

  private getCreateButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    const createBtn = cy.get(this.createThisComputerButton)
    createBtn.should('be.visible').should('have.value', 'Create this computer')
    return createBtn
  }

  createANewComputer() {
    this.getCreateButton().click()
  }

  private getCancelButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    const cancelBtn = cy.get(this.cancelButton)
    cancelBtn.should('be.visible').should('have.text', 'Cancel')
    return cancelBtn
  }

  cancelAddNewComputer() {
    this.getCancelButton().click()
  }
}
