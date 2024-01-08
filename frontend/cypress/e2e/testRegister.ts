// TDD
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Jag är inne på Homesidan och klickar på Registerlänken.", () => {
  cy.visit("http://localhost:5173/");
  cy.get("#reg-link").click();
});

When(
  "Jag skriver in all användarinformation i Registreringsformuläret.",
  () => {
    cy.get("#firstname").type("test");
    cy.get("#lastname").type("test");
    cy.get("#email").type("test@test.com");
    cy.get("#username").type("test");
    cy.get("#password").type("test");
  }
);

Then("Jag klickar på submit och navigeras till Homesidan.", () => {
  cy.get("#styling-reg-button").click();
});
