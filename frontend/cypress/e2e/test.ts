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

Given("Jag är inne på Home-sidan", () => {});

When(
  "Jag skriver in fel username och password och klickar på sign in-knappen",
  () => {
    cy.get("#username").type("hej");
    cy.get("#password").type("123");
    cy.get("#sign-in-button").click();
  }
);

Then("Varnings-popupruta visar ett felmeddelande. Jag stänger popupen.", () => {
  cy.get("#popup-container").should("exist");
  cy.get("#close-popup").click();
});

Given("Jag är fortfarande inne på Home-sidan", () => {});

When("Jag skriver in rätt username och password", () => {
  cy.get("#username").type("test");
  cy.get("#password").type("test");
});

Then("Jag klickar på sign in-knappen navigeras till landingpage", () => {
  cy.get("#sign-in-button").click();
  cy.url().should("contain", "/landingpage");
});
