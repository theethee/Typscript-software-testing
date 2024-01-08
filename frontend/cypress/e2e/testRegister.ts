// TDD
import {
  Before,
  When,
  Then,
  Given,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är inne på Homesidan och klickar på Registerlänken.", () => {
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

Given("Jag är tillbaka på Home efter registrering.", () => {});

When("Jag loggar in mig med nytt användarnamn och lösenord.", () => {
  cy.get("#username").type("test");
  cy.get("#password").type("test");
});

Then("Jag loggas in och hamnar i landingpage.", () => {
  cy.get("#sign-in-button").click();
});
