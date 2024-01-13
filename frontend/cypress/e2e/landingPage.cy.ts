describe("Testing landingpage", () => {
  before(() => {
    cy.visit("http://localhost:5173/");
    cy.get("#username").type("test2");
    cy.get("#password").type("test2");
    cy.get("#sign-in-button").click();
  });

  it("Navigate to My account, Saved courses and All courses", () => {
    cy.get("#my-account-button").click();
    cy.get(".arrow-back").click();
    cy.get("#saved-courses").click();
    cy.get(".arrow-back").click();
    cy.get("#all-courses").click();
    cy.get(".arrow-back").click();
  });
});
