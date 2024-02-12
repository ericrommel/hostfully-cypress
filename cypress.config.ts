import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  video: true,
  videosFolder: "cypress/report/evidences/videos",
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/report/evidences/screenshots",
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    "configFile": "reporter-config.json"
  },
});
