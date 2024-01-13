import { mount } from "cypress/react18";
import NotSignedInModal from "../../src/components/Popup/NotSignedIn";
import { MemoryRouter } from "react-router-dom";

describe("Testing popup for when you have typed wrong password or username", () => {
  it("Checking the popup for heading, text and button", () => {
    mount(
      <MemoryRouter>
        <NotSignedInModal onClose={() => {}} />
      </MemoryRouter>
    );
    cy.get("#close-popup").should("exist");
    cy.get("#heading").should("have.text", "Error");
    cy.get("#text").should(
      "have.text",
      "Wrong username or password. Please try again!"
    );
    cy.get("#close-popup").click();
  });
});
