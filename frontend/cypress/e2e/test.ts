// TDD
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Jag är inne på Home-sidan", () => {
  cy.visit("http://localhost:5173/");
});

When(
  "Jag skriver in fel username och password och klickar på sign in-knappen",
  () => {
    cy.get("#username").type("hej");
    cy.get("#password").type("123");
    cy.get("#sign-in-button").click();
  }
);

Then("Varnings-popupruta visar ett felmeddelande. Jag stänger popupen.", () => {
  cy.get("#popup-container");
  cy.get("#warning-text")
    .should("be.visible")
    .should("have.text", "Wrong username or password.");
  cy.get("#error-heading").should("be.visible").should("have.text", "Error");
  cy.get("#close-popup").click();
});

Given("Jag är fortfarande inne på Home-sidan", () => {
  cy.visit("http://localhost:5173/");
});

When("Jag skriver in rätt username och password", () => {
  cy.get("#username").type("test");
  cy.get("#password").type("test");
});

Then("Jag klickar på sign in-knappen navigeras till landingpage", () => {
  cy.get("#sign-in-button").click();
  cy.url().should("contain", "/landingpage");
});
