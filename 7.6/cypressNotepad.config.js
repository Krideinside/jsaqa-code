const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3000",
  },
  viewportWidth: 1280,
  viewportHeight: 800,
});
