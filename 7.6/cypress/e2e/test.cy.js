beforeEach(() => {
  cy.visit("/");
});

it("test addBook1", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  cy.addBook("Hell", "Author goes to hell", "Dante");
  cy.contains("Add to favorite").click();
});

it("test addBook2", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  cy.addBook("Gamlet", "Pure Yorik", "Shekspire");
});

it("delete from Favorites", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  cy.get("h4").click();
  cy.contains("Delete from favorite").click();
  cy.contains("Please add some book to favorit on home page!").should(
    "be.visible"
  );
});
