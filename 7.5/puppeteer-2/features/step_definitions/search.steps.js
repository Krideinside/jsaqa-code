const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement, choosePlace } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 60000,
  });
});

When("choose active place on Zveropolis thursday 11:00", async function (string) {
  await clickElement(page, "body > nav > a:nth-child(2)");
  await clickElement(
    page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  );
  await choosePlace(page, 4, 5);
  const actual = await getText(page, string, {
    disabled: false,
  });
  
Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});
