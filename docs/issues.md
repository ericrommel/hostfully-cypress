# Issues found

## ISSUE-001: Additional space in the alert message

- **Description:** Alert message contains an additional space when adding a new computer after the sign `!`
- **Type:** Bug
- **Severity:** Minor
- **Steps to Reproduce:**
  1. Add a new computer with an unique name
  2. From the list of computers page, the alert message shows the message: `Done ! Computer <NAME> has been created`
- **Actual Result:** Cypress testing is failing as the message returned was `Done !  Computer fully-fabulous has been created`. Note the additional space between `!` and `Computer`.
- **Expected Result:** Cypress testing should not detect an additional space
- **Evidences:** See here: [Additional space](./evidences/AdditionalSpace.png).
- **Workaround:** Added an additional space inside the test check

## ISSUE-002: When the computer name is empty, the error message is not clear enough

- **Description:** Error message when computer name is empty is not clear enough for the final user
- **Type:** Enhancement
- **Severity:** Minor
- **Steps to Reproduce:**
  1. Go to `Add a new computer` page
  2. Do not fill out a computer name
  3. Fill out all of other fields with valid data
  4. Click on `Create this computer` button
- **Actual Result:** A red error alert is shown with the message: `Failed to refine type : Predicate isEmpty() did not fail.`
- **Expected Result:** It should show a clear human readable message. Suggestion: `This field cannot be empty`
- **Evidences:** See here: [Not clear error message](./evidences/NotClearErrorMessage.png).
- **Workaround:** Using part of the message to test: `Failed to refine type`

## ISSUE-003: When the introduced date format is not valid the error message is not clear enough

- **Description:** Error message when the introduced date format is not valid is not clear enough for the final user
- **Type:** Enhancement
- **Severity:** Minor
- **Steps to Reproduce:**
  1. Go to `Add a new computer` page
  2. Fill out an invalid format date for the `Introduced` field, e.g. `dd-MM-yyyy`
  3. Fill out all of other fields with valid data
  4. Click on `Create this computer` button
- **Actual Result:** A red error alert is shown with the message: `Failed to decode date : java.time.format.DateTimeParseException: Text <DATE> could not be parsed at index 0`
- **Expected Result:** It should show a clear human readable message. Suggestion: `Date format is not valid. Use this format 'yyyy-MM-dd' (e.g. 2024-02-11)`
- **Evidences:** See here: [Not clear error message for invalid dates](./evidences/NotClearErrorMessage_InvalidDate.png).
- **Workaround:** Using part of the message to test: `Failed to decode date`

## ISSUE-004: There is no character limit for the computer name

- **Description:** There is no limit for the computer name. There are two situations here:
  1. No limit but server process the request (evidence #1)
  2. No limit but server is not able to process the request. It happens only in manual execution mode
- **Type:** Bug
- **Severity:** Medium
- **Steps to Reproduce:**
  1. Go to `Add a new computer` page
  2. Fill out the computer name with 150 words (around 1200 characters)
  3. Fill out all of other fields with valid data
  4. Click on `Create this computer` button
  5. Actual result: Request is processed. No errors other than the ugly name on the list page
  6. Go to `Add a new computer` page again
  7. Fill out the computer name with more than 300 words
  8. Fill out all of other fields with valid data
  9. Click on `Create this computer` button
- **Actual Result:** The list of computers page is shown but there is no alert message indicating that the computer was added.
- **Expected Result:** An error message indicating that the limit of characters was exceeded
- **Evidences:** See here: [No limit of characters](./evidences/NoLimitCharacterComputerName.png).
- **Workaround:** No workaround. Test TC002 is skipped. Wait bug fix to re-visit the test

## ISSUE-005: Computers are not being really saved

- **Description:** The new computers are not being added even though the system shows an alert that it was.
- **Type:** Bug
- **Severity:** Critical
- **Steps to Reproduce:**
  1. From the initial page (list computers page), check the number of computers available
  2. Click on Add a new computer button and fill out all fields to add a new computer with an unique name
  3. Check and confirm that the alert message shows that the new computer has been added
  4. Check and confirm that the number of computers available was not changed (but it should)
  5. From the list of computers page, filter by the new computer name and click on the Filter button
- **Actual Result:** The list computer page shows "Nothing to display"
- **Expected Result:** The number of computers available should be increased. The list computer page should show the new computer added
- **Evidences:** After run the tests, watch [the video recorded](./evidences/BigComputerNameIssue.mp4)
- **Workaround:** No workaround. Test TC006 is skipped. Wait bug fix to re-visit the test
