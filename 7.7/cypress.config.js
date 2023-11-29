const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 0,
  },
});
