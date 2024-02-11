# Hostfully QA Engineer Cypress exercise

## Description of the Exercise

Write automated tests for the demo application available at <https://computer-database.gatling.io/computers>, focusing on, but not limited to, the following functionality:

- Adding a new computer

### Expectations

Typically, this technical assessment spans a duration of 3 to 5 hours.

### Acceptance Criteria

- [ ] Come up with at least two scenarios for automation.
- [ ] Ensure that the tests cover the basic and edge cases for each functionality.

### Technical Criteria

- [ ] Use Cypress and JavaScript to write the test scripts (extra points for TypeScript).
- [ ] Your tests should run smoothly

### How to Deliver Your Solution

- [ ] Upload your solution to a GitHub repository.
- [ ] Use descriptive commit messages and, preferably, create multiple commits to
provide a clear history of your work.
- [ ] Include a README file in your repository with clear instructions on how to run
the tests.
- [ ] **[OPTIONAL]:** Provide a summary of your findings, including any
issues you encountered and how you resolved them.
- [ ] **[OPTIONAL]:** Include a brief explanation of how you approached the task and
why you made certain decisions.

## Description of the Solution

The solution was designed in the simplest way to avoid spending more than 5 hours on it.

### General settings

Install and set configuration if needed for:

- Node.js (v20.10.0)
- npm (10.2.3)

#### Install dependencies

  ```batch
  npm install
  ```

### Deliverables

Check out the the documents below to learn more about the tests:

- [Test Strategy document](docs/test-strategy.md)
- [Test Plan document](docs/test-plan.md)
- Test Case documents:
  1. [Test Case: Verify Successful Addition of a Computer](docs/est-cases/T001.md)
  2. [Test Case: Verify Error Message for Missing Name Field](docs/test-cases/T002.md)
  3. [Test Case: Verify Error Message for Invalid Introduced Date](docs/test-cases/T003.md)
  4. [Test Case: Verify Handling of Discontinued Date Before Introduced Date](docs/test-cases/T004.md)
  5. [Test Case: Verify Maximum Character Limit for Name Field](docs/test-cases/T005.md)
