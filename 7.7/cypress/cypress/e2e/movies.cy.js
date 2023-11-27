import tests from "../fixtures/seats.json";
describe("movie tickets reservation screen", () => {
  // const seats = require("../fixtures/seats.json");
  tests.forEach((test) => {
    it("should display 7 days", () => {
      cy.visit("/");
      cy.get(".page-nav__day").should("have.length", 7);
      cy.get(".page-nav > :nth-child(2)").click();
      cy.get(".movie").first().next().contains("14:00").click();

      test.data.forEach((seat) => {
        cy.get(`:nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
      });
    });
  });
});
