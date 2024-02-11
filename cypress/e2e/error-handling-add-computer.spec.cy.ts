import { DateTime } from 'luxon'
import NewComputerPage from '../support/pages/computer-new.page'
import { setRandomString } from '../support/utils/utils'

describe('Scenario 2: Error handling for adding a new computer', () => {
  // .Messages
  const errorComputerNameMsg = 'Failed to refine type'
  const errorIntroducedDataInvalidMsg = 'Failed to decode date'
  const errorDiscontinuedDateBeforeIntroducedDateMsg =
    'Discontinued date is before introduction date'
  // const errorMaximumCharacterLimitExceededMsg = 'Maximum character limit exceeded. Limit is 50 characters.'

  // Testing data
  const now = DateTime.now()
  const computerName = setRandomString()
  const introducedDateValid = now.toFormat('yyyy-MM-dd')
  const introducedDateInvalid = now.toFormat('dd-MM-yyyy')
  const discontinuedDateValid = now.plus({ year: 1 }).toFormat('yyyy-MM-dd')
  const discontinuedDateBeforeIndroducedDate = now
    .minus({ day: 1 })
    .toFormat('yyyy-MM-dd')
  const newComputerPage = new NewComputerPage()

  it('TC002: Verify Error Message for Missing Name Field', () => {
    // .Act: Navigate to the "Add a computer" page
    newComputerPage.load()

    // .Act: Leave the computer name field empty and fill in valid details for other fields
    newComputerPage.setIntroducedDate(introducedDateValid)
    newComputerPage.setDiscontinuedDate(discontinuedDateValid)
    newComputerPage.selectCompanyName()

    // .Act: Click on the "Create this computer" button
    newComputerPage.createANewComputer()

    // .Assert: Verify that the computer is successfully added to the database.
    newComputerPage.checkAlertError(errorComputerNameMsg) // ToDo: ISSUE-002
  })

  it('TC003: Verify Error Message for Invalid Introduced Date', () => {
    // .Act: Navigate to the "Add a computer" page
    newComputerPage.load()

    // .Act: Enter valid details for computer name, select a company, and enter an invalid format for the introduced date.
    newComputerPage.setNewComputerName(computerName)
    newComputerPage.setIntroducedDate(introducedDateInvalid)
    newComputerPage.setDiscontinuedDate(discontinuedDateValid)
    newComputerPage.selectCompanyName()

    // .Act: Click on the "Create this computer" button
    newComputerPage.createANewComputer()

    // .Assert: Verify that the computer is successfully added to the database.
    newComputerPage.checkAlertError(errorIntroducedDataInvalidMsg) // ToDo: ISSUE-003
  })

  it('TC004: Verify Handling of Discontinued Date Before Introduced Date', () => {
    // .Act: Navigate to the "Add a computer" page
    newComputerPage.load()

    // .Act: Enter valid details for name, introduced date, discontinued date (before introduced date), and select a company.
    newComputerPage.setNewComputerName(computerName)
    newComputerPage.setIntroducedDate(introducedDateValid)
    newComputerPage.setDiscontinuedDate(discontinuedDateBeforeIndroducedDate)
    newComputerPage.selectCompanyName()

    // .Act: Click on the "Create this computer" button
    newComputerPage.createANewComputer()

    // .Assert: Verify that the computer is successfully added to the database.
    newComputerPage.checkAlertError(
      errorDiscontinuedDateBeforeIntroducedDateMsg
    )
  })

  // ToDo: ISSUE-004
  it.skip('TC005: Verify Maximum Character Limit for Name Field', () => {
    // .Act: Navigate to the "Add a computer" page
    newComputerPage.load()

    // .Act: Enter a name that exceeds the maximum character limit.
    newComputerPage.setNewComputerName(null, 300)

    // .Act: Fill in valid details for other fields.
    newComputerPage.setIntroducedDate(introducedDateValid)
    newComputerPage.setDiscontinuedDate(discontinuedDateValid)
    newComputerPage.selectCompanyName()

    // .Act: Click on the "Create this computer" button
    newComputerPage.createANewComputer()

    // .Assert: An error message should be displayed indicating that the name field exceeds the maximum character limit.
    // newComputerPage.checkAlertError(errorMaximumCharacterLimitExceededMsg)
  })
})
