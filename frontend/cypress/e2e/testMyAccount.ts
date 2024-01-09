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

Given("Jag loggar in mig själv och navigerar till my account.", () => {
  cy.get("#username").type("test");
  cy.get("#password").type("test");
  cy.get("#sign-in-button").click();
  cy.get("#my-account-button").click();
});

When("Jag ändrar firstname och lastname.", () => {
  cy.get("#style-edit-button").click();
  cy.get("#firstname").clear();
  cy.get("#firstname").type("test2");
  cy.get("#lastname").clear();
  cy.get("#lastname").type("test2");
});

Then("Jag sparar mina ändringar.", () => {
  cy.get("#save-changes-button").click();
});
