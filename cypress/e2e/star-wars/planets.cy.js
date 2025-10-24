describe("Planets Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.viewport(414, 896);
  });

  it("should displays ten planets by default", () => {
    cy.wait(3000);
    cy.get("[data-slot='card']").should("have.length", 10);
  });

  it("should go to next page when click in nextPageButton", () => {
    cy.contains("Next").click();
    cy.get("[data-slot='card']")
      .first()
      .find("[data-slot='card-title']")
      .should("contain", "Dagobah");
  });

  it("should go to previous page when click in nextPageButton", () => {
    cy.contains("Next").click();
    cy.contains("Previous").click();
    cy.get("[data-slot='card']")
      .first()
      .find("[data-slot='card-title']")
      .should("contain", "Aleen");
  });

  it("should go to the page when click on page number", () => {
    cy.get("[data-slot='pagination-link']").contains("4").click();
    cy.get("[data-slot='card']")
      .first()
      .find("[data-slot='card-title']")
      .should("contain", "Muunilinst");
  });

  it("should go to home when click on logo", () => {
    cy.get("[data-slot='pagination-link']").contains("4").click();
    cy.get("[alt='Logo']").click();
    cy.get("[data-slot='card']")
      .first()
      .find("[data-slot='card-title']")
      .should("contain", "Aleen Minor");
  });

  it("should search planet on type into search input", () => {
    cy.get("[data-slot='input']").type("Muunilinst");
    cy.get("[data-slot='card']")
      .first()
      .find("[data-slot='card-title']")
      .should("contain", "Muunilinst");
  });

  it("should go to planet details page when click on Details button", () => {
    cy.contains("Details").click();
    cy.url().should("include", "/planets/38");
  });

  it("should go to page 4, go to planet details, click go back browser and show page 4 ", () => {
    cy.get("[data-slot='pagination-link']").contains("4").click();
    cy.contains("Details").click();
    cy.url().should("include", "/planets/57");
    cy.go("back");
    cy.get("[data-slot='pagination-link']")
      .contains("4")
      .should("have.attr", "data-active", "true");
  });
});
