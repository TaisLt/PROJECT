// Test Case 9: Search Product

/// <reference types="cypress" />

describe("SearchProduct", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    cy.get("a[href='/products']").click();
    cy.get(".title.text-center").should("be.visible");
    cy.get("#search_product").type("T-shirt");
    cy.get("#submit_search").click();
    cy.get(".title.text-center").should("be.visible");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible
