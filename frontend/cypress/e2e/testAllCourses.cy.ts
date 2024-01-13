describe("Testing all courses page", () => {
  it("sign in and navigate to all courses and click Html and Css course", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#username").type("test2");
    cy.get("#password").type("test2");
    cy.get("#sign-in-button").click();
    cy.get("#all-courses").click();
    cy.get("#all-videos div:first-child .nav-course-button").click();
  });
});
