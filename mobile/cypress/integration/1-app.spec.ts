/// <reference types="cypress" />

describe("Load app is working", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Devices are loading", () => {
    cy.contains("Home").should("be.visible");
    cy.contains("Office").should("be.visible");
  });

  it("Users are loading", () => {
    cy.contains("Users").click();
    cy.contains("Ines").should("be.visible");
    cy.contains("Brenda").should("be.visible");
  });

  it("Search a device", () => {
    cy.get("input").click().type("Home");
    cy.contains("Home").should("be.visible");
    cy.contains("Office").should("not.exist");
  });

  it("Lock a device and persist when navigate", () => {
    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').should("be.checked");
    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="checkbox"]').should("not.be.checked");

    cy.contains("Users").click();
    cy.contains("Devices").click();

    cy.get('[type="checkbox"]').should("not.be.checked");
  });
});
