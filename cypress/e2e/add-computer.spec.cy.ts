import NewComputerPage from '../support/pages/computer-new.page'
import ListComputersPage from '../support/pages/computer-list.page'
import { testData } from '../support/utils/test-data'

describe('Scenario 1: Add a new computer successfully', () => {
  let newComputerPage: NewComputerPage
  let listComputersPage: ListComputersPage

  beforeEach(() => {
    listComputersPage = new ListComputersPage()
    listComputersPage.load() // Load the List Computers page before each test
    newComputerPage = new NewComputerPage()
  })

  function stepsToCreateANewComputer(): void {
    newComputerPage.load()
    newComputerPage.setNewComputerName(testData.computerName)
    newComputerPage.setIntroducedDate(testData.introducedDate)
    newComputerPage.setDiscontinuedDate(testData.discontinuedDate)
    newComputerPage.selectCompanyName()
    newComputerPage.createANewComputer()
  }

  it('TC001: Verify Alert Message for Successful Addition', () => {
    // .Arrange
    // .Act
    stepsToCreateANewComputer()

    // .Assert
    listComputersPage.checkAlertComputerCreated(testData.computerName)
  })

  // ToDo: ISSUE-005. Test case skipped until the functionality is implemented/fixed
  it.skip('TC002: Verify Database Persistence', () => {
    // .Arrange
    listComputersPage.getNumberOfComputersRegistered().then((initialCount) => {
      // .Act
      stepsToCreateANewComputer()

      // .Assert
      listComputersPage
        .getNumberOfComputersRegistered()
        .should('eq', initialCount + 1)
        
      // .Act
      listComputersPage.searchComputerByName(testData.computerName)

      // .Assert
      listComputersPage.validateSearchComputer(testData.computerName)
    })
  })
})
