import { mount } from "cypress/react18";
import Navbar from "../../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Testing burger menu component test", () => {
  mount(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  it("Click on burger menu and the dropdown menu shows up then close menu", () => {
    cy.get("#burger").click();
    cy.get("#burger").click();
  });
});
