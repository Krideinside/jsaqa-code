const user = require("../user.js");
const { test, expect } = require("@playwright/test");

test("Успешная авторизация", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").fill(user.email);
  await page.getByPlaceholder("Пароль").fill(user.password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page.locator("h2")).toHaveText(["Моё обучение"]);
  await page.close();
});
test("Неуспешная авторизация", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").fill(user.invalidEmail);
  await page.getByPlaceholder("Пароль").fill(user.invalidPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText([
    "Вы ввели неправильно логин или пароль",
  ]);
  await page.close();
});
