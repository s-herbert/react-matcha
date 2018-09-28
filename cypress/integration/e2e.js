describe("Integration tests", () => {
  it("visits the site, toggles the schema", () => {
    cy.visit("http://localhost:9090");
    cy.contains("View Schema").click();
    cy.wait(1500);
    cy.contains("Hide Schema").click();
    cy.contains("View Schema").click();
  });

  it("toggles in/out of query mode via button", () => {
    cy.wait(1500);
    cy.contains("Draft Query").click();
    cy.wait(250);
    cy.contains("Draft Query").click();
  });

  it("selects starship node, enters draft mode to focus on ROOT", () => {
    cy.contains("Starship").click();
    cy.wait(400);
    cy.contains("Draft Query").click();
    cy.get(".active").should("have.text", "Root ");
  });

  xit("clicks allFilms, and populates the query editor", () => {
    cy.get(":nth-child(1) > .doc-category > :nth-child(2)");
    cy.get(
      ':nth-child(1) > .CodeMirror-line > [role="presentation"] > .cm-punctuation'
    ).should("have.text", "{");
    cy.get(".cm-property").should("have.text", "allFilms");
    cy.get(
      ':nth-child(1) > .CodeMirror-line > [role="presentation"] > .cm-punctuation'
    ).should("have.text", "}");
  });
});