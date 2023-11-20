const { testTimeout } = require("./jest.config");
const { clickElement, choosePlace, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Cinema page tests", () => {
  test("choose active place on Zveropolis tuesday 11:00", async () => {
    await clickElement(
      page,
      "body > nav > a:nth-child(2) > span.page-nav__day-week"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 4, 5);
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("choose active place on Terminator wednesday 10:00", async () => {
    await clickElement(
      page,
      "body > nav > a:nth-child(3) > span.page-nav__day-week"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 5, 7);
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("choose not active place on Zveropolis wednesday 11:00", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 4, 4);
    const actual = await page.$eval("button.acceptin-button", (e) =>
      e.getAttribute("disabled")
    );
    expect(actual).toContain("true");
  });
});
