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

Given("user is on cinema page", async function () {
  return await this.page.goto("https://qamid.tmweb.ru/client/index.php", {
    timeout: 10000,
  });
});

When("user click tuesday", async function () {
  return await clickElement(
    this.page,
    "body > nav > a:nth-child(2) > span.page-nav__day-week"
  );
});

When("user click wednesday", async function () {
  return await clickElement(
    this.page,
    "body > nav > a:nth-child(3) > span.page-nav__day-week"
  );
});

When("user click on Zveropolis time", async function () {
  await clickElement(
    this.page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  );
});

When("user click on Terminator time", async function () {
  await clickElement(
    this.page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
  );
});

When("user click on a row 4 chair 5", async function () {
  await choosePlace(this.page, 4, 5);
});

When("user click on a row 5 chair 7", async function () {
  await choosePlace(this.page, 5, 7);
});

When("user click on not active row 4 chair 4", async function () {
  await choosePlace(this.page, 4, 4);
});

When("user click on the acception button", async function () {
  await clickElement(this.page, "button.acceptin-button");
});

Then("user see confirmation message", async function () {
  const actual = await getText(this.page, "h2.ticket__check-title");
  expect(actual).to.contain("Вы выбрали билеты:");
});

Then("user looks that the button is disabled", async function () {
  const actual = await this.page.$eval("button.acceptin-button", (e) =>
    e.getAttribute("disabled")
  );
  expect(actual).toContain("true");
});
