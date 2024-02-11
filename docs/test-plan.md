# Test Plan Document

## Test Scenarios

### Scenario 1

Add a new computer successfully:

- Verify that a new computer can be added with valid input data.
- Validate that the newly added computer appears in the database.

### Scenario 2

Error handling for adding a new computer

- Test adding a computer with invalid or missing input data (e.g., empty fields, invalid dates).
- Ensure appropriate error messages are displayed and functionality is not affected.

## Test Cases

### Scenario 1: Add a new computer successfully

1. Enter valid computer details (computer name, introduced date, discontinued date, company).
2. Click on the "Create this computer" button.
3. Verify that the computer is successfully added to the database.

### Scenario 2: Error handling for adding a new computer

1. Leave one or more required fields empty and attempt to add a computer.
2. Verify that appropriate error messages are displayed for each missing field.
3. Enter invalid data (e.g., invalid date format) and attempt to add a computer.
4. Validate that the system handles the error gracefully and provides informative feedback.

## Test Execution

- **Tools:** Cypress with JavaScript/TypeScript.
- **Environment:** The demo application available at <https://computer-database.gatling.io/computers>.
- **Test Data:** Both valid and invalid test data will be used to cover different scenarios.
- **Execution Steps:** Run the automated test scripts using Cypress and verify the results against expected outcomes.

## Test Reporting

Test results will be documented, including pass/fail status and any deviations from expected behavior.
Any encountered issues will be logged with details and resolutions.

## Timeline

Test execution and completion are expected within 3 to 5 hours, as per the exercise requirements.

## Review and Approval

Test results and documentation will be reviewed by the QA Lead for accuracy and completeness before final submission.

## Dependencies

- Availability of a stable testing environment with access to the demo application.
- Continuous monitoring for any changes or updates to the application during the testing process.

## Exit Criteria

- All test scenarios and cases have been executed and validated.
- Test results and documentation have been reviewed and approved.
- The automation solution is ready for submission as per the exercise requirements.
