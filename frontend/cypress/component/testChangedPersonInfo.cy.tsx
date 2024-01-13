import { mount } from "cypress/react18";
import ChangedPersonInfo from "../../src/components/Popup/ChangedPersonInfo";
import { MemoryRouter } from "react-router-dom";

describe("Testing popup for when you have changed your person info", () => {
  it("Checking the popup for heading, text and button", () => {
    mount(
      <MemoryRouter>
        <ChangedPersonInfo onClose={() => {}} />
      </MemoryRouter>
    );
    cy.get("#close-popup").should("exist");
    cy.get("#heading").should("have.text", "Congratulations");
    cy.get("#text").should(
      "have.text",
      "You have successfully changed your person information"
    );
    cy.get("#close-popup").click();
  });
});
