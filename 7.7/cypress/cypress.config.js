const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    retries: 1,
  },
});
