const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, choosePlace } = require("../../lib/commands.js");

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

Given("user is on cinema page", async function () {
  return await this.page.goto("https://qamid.tmweb.ru/client/index.php", {
    setTimeout: 60000,
  });
});

When("user click tuesday", async function () {
  await clickElement(
    page,
    "body > nav > a:nth-child(2) > span.page-nav__day-week"
  );
});

When("user click wednesday", async function () {
  await clickElement(
    page,
    "body > nav > a:nth-child(3) > span.page-nav__day-week"
  );
});

When("user click on Zveropolis time", async function () {
  await clickElement(
    page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  );
});

When("user click on Terminator time", async function () {
  await clickElement(
    page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
  );
});

When("user click on a row 4 chair 5", async function () {
  await choosePlace(page, 4, 5);
});

When("user click on a row 5 chair 7", async function () {
  await choosePlace(page, 5, 7);
});

When("user click on not active row 4 chair 4", async function () {
  await choosePlace(page, 4, 4);
});

Then("user looks that the button is active", async function () {
  const actual = await page.$eval("button.acceptin-button", (e) =>
    e.getAttribute("disabled")
  );
  expect(actual).toContain(null);
});

Then("user looks that the button is disabled", async function () {
  const actual = await page.$eval("button.acceptin-button", (e) =>
    e.getAttribute("disabled")
  );
  expect(actual).toContain("true");
});
