# Hostfully QA Engineer Cypress exercise

## Description of the Exercise

Write automated tests for the demo application available at <https://computer-database.gatling.io/computers>, focusing on, but not limited to, the following functionality:

- Adding a new computer

### Expectations

Typically, this technical assessment spans a duration of 3 to 5 hours.

### Acceptance Criteria

- [X] Come up with at least two scenarios for automation.
- [X] Ensure that the tests cover the basic and edge cases for each functionality.

### Technical Criteria

- [X] Use Cypress and JavaScript to write the test scripts (extra points for TypeScript).
- [X] Your tests should run smoothly

### How to Deliver Your Solution

- [X] Upload your solution to a GitHub repository.
- [X] Use descriptive commit messages and, preferably, create multiple commits to provide a clear history of your work.
- [X] Include a README file in your repository with clear instructions on how to run the tests.
- [X] **[OPTIONAL]:** Provide a summary of your findings, including any issues you encountered and how you resolved them.
- [X] **[OPTIONAL]:** Include a brief explanation of how you approached the task and why you made certain decisions.

## Description of the Solution

The solution was designed in the simplest way to avoid spending more than 5 hours on it.

### General settings

Install and set configuration if needed for:

- [Node.js](https://nodejs.org/en/download/) (version used: v20.10.0)

#### Install dependencies

  ```batch
  npm install
  ```

### Manual execution

- Run the tests:
  
  ```batch
  npm run test
  ```

#### Report

After a test execution, reports are saved locally at [cypress/report/mochareports/report.html](cypress/report/mochareports/report.html):

### CI/CD

This project uses GitHub Actions as a sample CI in [GitHub](https://github.com/ericrommel/hostfully-cypress/actions/workflows/main.yml)

### Deliverables

#### Approach used

##### TL;DR

- Developed 6 test cases for the add computer functionality, spanning 2 scenarios
- Discovered 5 issues during testing, documented in [here](docs/issues.md)
- Utilized the Page Object Model (POM) to organize locators and functions, enhancing code reusability and maintainability
- Two issues caused test failures, prompting the skipping of failing tests until resolution
- Implemented workarounds for the remaining issues
- Test strategy, test plan, and test cases documents were created for reference and documentation purposes.

##### Explanation

The task required the creation of test scenarios for the add computer functionality, resulting in the development of 6 test cases covering 2 distinct scenarios. During testing, 5 issues were identified and documented in the provided issue log. To structure the automation code effectively, the Page Object Model (POM) was employed, enabling the systematic organization of locators and functions into reusable components associated with specific pages, such as the List computers page and Add computers page. This approach promotes code reusability and facilitates maintenance.

Two of the identified issues led to test failures, necessitating the temporary skipping of affected tests until the underlying problems are resolved. For the remaining issues, temporary workarounds were implemented to ensure test continuity. Once the identified issues are addressed and resolved, the affected tests can be revisited and rectified accordingly.

Additionally, as part of the testing process, comprehensive test strategy, test plan, and test cases documents were crafted to provide guidance and reference for the testing efforts. These documents serve as valuable resources for understanding the testing approach, outlining test scenarios, and documenting test cases for future use and collaboration.

#### Documents

Check out the the documents below to learn more about the tests:

- [Test Strategy document](docs/test-strategy.md)
- [Test Plan document](docs/test-plan.md)
- Test Case documents:
  1. [Test Case: Verify Alert Message for Successful Addition](docs/est-cases/T001.md)
  2. [Test Case: Verify that the new computer is saved in the database and reflected in the list of computers.](docs/test-cases/T002.md)
  3. [Test Case: Verify Error Message for Missing Name Field](docs/test-cases/T003.md)
  4. [Test Case: Verify Error Message for Invalid Introduced Date](docs/test-cases/T004.md)
  5. [Test Case: Verify Handling of Discontinued Date Before Introduced Date](docs/test-cases/T005.md)
  6. [Test Case: Verify Maximum Character Limit for Name Field](docs/test-cases/T006.md)

### Summary of findings

Findings are in this [document](docs/issues.md).
