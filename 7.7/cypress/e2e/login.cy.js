import tests from "..//fixtures/login.json";

describe("test logins", () => {
  tests.forEach((test) => {
    it(`${test.name}`, () => {
      cy.visit("/admin");
      test.data.forEach((data) => {
        cy.login(data.email, data.pass);
      });
    });
  });
});
