const { testTimeout } = require("./jest.config");

let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div h1");
    //await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector =
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div.js-build-in.position-relative.overflow-hidden.section-team-hero.build-in-animate > div.position-relative.position-md-absolute.top-md-0.right-md-0.bottom-md-0.left-md-0.z-1 > div > div > div > div > a";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);

    expect(actual).toContain("Sign up for free");
  });
});

describe("Github page second tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features/copilot");
  });
  test("The h1 copilot page header content", async () => {
    const title = "#hero-section-brand-heading";
    await page.waitForSelector(title, { visible: true });
    const actual = await page.$eval(title, (element) => element.textContent);
    const expected = "The world’s most widely adopted AI developer tool.";
    expect(actual).toEqual(expected);
  });

  test("The page contains Compare Plans button", async () => {
    const btnSelector =
      "#hero > div.Primer_Brand__Grid-module__Grid___q48mT > div > section > div > div > div > div > a.Primer_Brand__Button-module__Button___lDruK.Primer_Brand__Button-module__Button--secondary___akMC2.Primer_Brand__Button-module__Button--size-medium___EyCyw.Button--heroCta.Button--onColoredBg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);

    expect(actual).toContain("Compare Plans");
  });

  test("Link Sponsors in Dropdown menu", async () => {
    const btnSelector =
      "body > div.logged-out.env-production.page-responsive.header-overlay > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > button";
    browser.actions().mouseMove(btnSelector).perform();
    const sponsors =
      "body > div.logged-out.env-production.page-responsive.header-overlay > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > div > div:nth-child(1) > ul > li > a > div";
    page.waitForSelector(sponsors, { visible: true }).click();
    const title =
      "body > div.logged-out.env-production.page-responsive > div.application-main > main > div > div.position-relative.mb-4.mb-lg-10 > div.d-flex.flex-column.flex-justify-center.text-md-center.pt-5.pt-md-8.pt-xl-12.pb-11.pb-md-12 > div > h1";
    await page.waitForSelector(title, { visible: true });
    const actual = await page.$eval(title, (link) => link.textContent);

    expect(actual).toContain("Invest in the software that powers your world");
  });
});
