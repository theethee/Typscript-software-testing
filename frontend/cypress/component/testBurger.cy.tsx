import { mount } from "cypress/react18";
import Navbar from "../../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Testing burger menu component test", () => {
  it("Click on burger menu and the dropdown menu shows up then close menu", () => {
    mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    cy.get("#burger").should("be.visible");
    cy.get("#burger").click();
    cy.get("#burger").click();
  });
});
