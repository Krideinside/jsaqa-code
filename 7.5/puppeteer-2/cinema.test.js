const { testTimeout } = require("./jest.config");
const { clickElement, choosePlace, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://qamid.tmweb.ru/client");
});

afterEach(() => {
  page.close();
});

describe("Cinema page tests", () => {
  test("Zveropolis thursday 11:00 open hall", async () => {
    await clickElement(page, "body > nav > a:nth-child(2)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)"
    );
    const actual = await getText(page, "body > main > section > button", {
      disabled: true,
    });

    expect(actual).toContain("Забронировать");
  });

  test("Terminator wednesday 10:00 open hall", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
    );
    // await clickElement(
    //   page,
    //   "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(7)"
    // );
    await choosePlace(page, 5, 7);
    const actual = await getText(page, "body > main > section > button", {
      disabled: false,
    });

    expect(actual).toContain("Забронировать");
  });

  // test("The first link attribute", async () => {
  //   const actual = await page.$eval("a", (link) => link.getAttribute("href"));
  //   expect(actual).toEqual("#start-of-content");
  // });

  // test("The page contains Sign in button", async () => {
  //   await page.waitForXPath("(//a[contains(text(),'Sign up for free')])[1]");
  //   let elHandle = await page.$x(
  //     "(//a[contains(text(),'Sign up for free')])[1]"
  //   );
  //   const actual = await page.evaluate((el) => el.textContent, elHandle[0]);

  //   expect(actual).toContain("Sign up for free");
  //   // const btnSelector =
  //   //   "body > div.logged-out.env-production.page-responsive > div.application-main > main > div.js-build-in.position-relative.overflow-hidden.section-team-hero.build-in-animate > div.position-relative.position-md-absolute.top-md-0.right-md-0.bottom-md-0.left-md-0.z-1 > div > div > div > div > a";
  //   // await page.waitForSelector(btnSelector, { visible: true });
  //   // const actual = await page.$eval(btnSelector, (link) => link.textContent);

  //   // expect(actual).toContain("Sign up for free");
  // });
});

// describe("Github page second tests", () => {
//   beforeEach(async () => {
//     await page.goto("https://github.com/features/copilot", { timeout: 10000 });
//   });
//   test("The h1 copilot page header content", async () => {
//     const title = "#hero-section-brand-heading";
//     await page.waitForSelector(title, { visible: true });
//     const actual = await page.$eval(title, (element) => element.textContent);
//     const expected = "The world’s most widely adopted AI developer tool.";
//     expect(actual).toEqual(expected);
//   });

//   test("The page contains Compare Plans button", async () => {
//     const btnSelector =
//       "#hero > div.Primer_Brand__Grid-module__Grid___q48mT > div > section > div > div > div > div > a.Primer_Brand__Button-module__Button___lDruK.Primer_Brand__Button-module__Button--secondary___akMC2.Primer_Brand__Button-module__Button--size-medium___EyCyw.Button--heroCta.Button--onColoredBg";
//     await page.waitForSelector(btnSelector, { visible: true });
//     const actual = await page.$eval(btnSelector, (link) => link.textContent);

//     expect(actual).toContain("Compare Plans");
//   });

//   test("Link Sponsors in Dropdown menu", async () => {
//     const openSource = await page.$(
//       "body > div.logged-out.env-production.page-responsive.header-overlay > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > button"
//     );
//     await openSource.hover();
//     const sponsors = await page.$(
//       "body > div.logged-out.env-production.page-responsive.header-overlay > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > div > div:nth-child(1) > ul > li > a > div > div"
//     );
//     await sponsors.click();
//     const title =
//       "body > div.logged-out.env-production.page-responsive > div.application-main > main > div > div.position-relative.mb-4.mb-lg-10 > div.d-flex.flex-column.flex-justify-center.text-md-center.pt-5.pt-md-8.pt-xl-12.pb-11.pb-md-12 > div > h1";
//     await page.waitForSelector(title, { visible: true });
//     const actual = await page.$eval(title, (link) => link.textContent);

//     expect(actual).toContain("Invest in the software that powers your world");
//   });
// });
