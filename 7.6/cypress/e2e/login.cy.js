beforeEach(() => {
  cy.visit("/");
});

it("test login", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
});

it("test empty email", () => {
  cy.login(null, "123");
  cy.get("#mail").then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});

it("test empty pass", () => {
  cy.login("bropet@mail.ru", null);
  cy.get("#pass").then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});
