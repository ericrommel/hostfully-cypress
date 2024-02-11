import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  videosFolder: "cypress/report/evidences/videos",
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/report/evidences/screenshots",
  trashAssetsBeforeRuns: true,
});
