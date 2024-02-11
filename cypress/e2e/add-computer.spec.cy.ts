import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'
import NewComputerPage from '../support/pages/computer-new.page'
import ListComputerPage from '../support/pages/computer-list.page'

describe('Scenario 1: Add a new computer successfully', () => {
  it('TC001: Verify Successful Addition of a Computer', () => {
    // .Arrange
    const computerName = `${faker.word.sample()}-${faker.word.sample()}`
    const now = DateTime.now()
    const introducedDate = now.toFormat('yyyy-MM-dd')
    cy.log(`introducedDate: `, introducedDate)
    const discontinuedDate = now.plus({ years: 2 }).toFormat('yyyy-MM-dd')
    cy.log(`discontinuedDate: `, discontinuedDate)
    const newComputerPage = new NewComputerPage()
    const listComputersPage = new ListComputerPage()

    // .Act: Navigate to the "Add a computer" page.
    newComputerPage.load()

    // .Act: Enter valid details for name, introduced date, discontinued date, and select a company.
    newComputerPage.setNewComputerName(computerName)
    newComputerPage.setIntroducedDate(introducedDate)
    newComputerPage.setDiscontinuedDate(discontinuedDate)
    newComputerPage.selectCompanyName()

    // .Act: Click on the "Create this computer" button.
    newComputerPage.createANewComputer()

    // .Assert: Verify that the computer is successfully added to the database.
    listComputersPage.checkAlertComputerCreated(computerName)
  })
})
