const { testTimeout } = require("./jest.config");
const { clickElement, choosePlace, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client");
});

afterEach(() => {
  page.close();
});

describe("Cinema page tests", () => {
  test("choose active place on Zveropolis thursday 11:00", async () => {
    await clickElement(page, "body > nav > a:nth-child(2)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 4, 5);
    const actual = await getText(page, "body > main > section > button", {
      disabled: false,
    });

    expect(actual).toContain("Забронировать");
  });

  test("choose active place on Terminator wednesday 10:00", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 5, 7);
    const actual = await getText(page, "body > main > section > button", {
      disabled: false,
    });

    expect(actual).toContain("Забронировать");
  });

  test("choose not active place on Zveropolis wednesday 11:00", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await choosePlace(page, 4, 4);
    const actual = await getText(page, "body > main > section > button", {
      disabled: true,
    });

    expect(actual).toContain("Забронировать");
  });
});
