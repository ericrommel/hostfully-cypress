import NewComputerPage from '../support/pages/computer-new.page'
import { testData } from '../support/utils/test-data'

describe('Scenario 2: Error handling for adding a new computer', () => {
  const newComputerPage = new NewComputerPage()

  beforeEach(() => {
    newComputerPage.load()
  })

  it('TC003: Verify Error Message for Missing Name Field', () => {
    // .Arrange
    // .Act
    newComputerPage.setIntroducedDate(testData.introducedDate)
    newComputerPage.setDiscontinuedDate(testData.discontinuedDate)
    newComputerPage.selectCompanyName()
    newComputerPage.createANewComputer()

    // .Assert
    newComputerPage.checkAlertError(testData.errorMessages.errorComputerNameMsg)
  })

  it('TC004: Verify Error Message for Invalid Introduced Date', () => {
    // .Arrange
    // .Act
    newComputerPage.setNewComputerName(testData.computerName)
    newComputerPage.setIntroducedDate(testData.now.toFormat('dd-MM-yyyy'))
    newComputerPage.setDiscontinuedDate(testData.discontinuedDate)
    newComputerPage.selectCompanyName()
    newComputerPage.createANewComputer()

    // .Assert;
    newComputerPage.checkAlertError(
      testData.errorMessages.errorIntroducedDataInvalidMsg
    )
  })

  it('TC005: Verify Handling of Discontinued Date Before Introduced Date', () => {
    // .Arrange
    // .Act
    newComputerPage.setNewComputerName(testData.computerName)
    newComputerPage.setIntroducedDate(testData.introducedDate)
    newComputerPage.setDiscontinuedDate(
      testData.discontinuedBeforeIndroducedDate
    )
    newComputerPage.selectCompanyName()
    newComputerPage.createANewComputer()

    // .Assert
    newComputerPage.checkAlertError(
      testData.errorMessages.errorDiscontinuedDateBeforeIntroducedDateMsg
    )
  })

  // ToDo: ISSUE-004. Test case skipped until the functionality is implemented/fixed
  it.skip('TC006: Verify Maximum Character Limit for Name Field', () => {
    // .Arrange
    // .Act
    newComputerPage.setNewComputerName(null, 300) // Exceeds maximum character limit
    newComputerPage.setIntroducedDate(testData.introducedDate)
    newComputerPage.setDiscontinuedDate(testData.discontinuedDate)
    newComputerPage.selectCompanyName()
    newComputerPage.createANewComputer()

    // .Assert
    newComputerPage.checkAlertError(
      testData.errorMessages.errorMaximumCharacterLimitExceededMsg
    )
  })
})
