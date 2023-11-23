describe("notepad spec", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
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
});

describe("mobile spec", () => {
  beforeEach(() => {
    cy.viewport(720, 1280);
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
});
