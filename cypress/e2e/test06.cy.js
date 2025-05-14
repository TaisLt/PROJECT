// Test Case 18: View Category Products

/// <reference types="cypress" />

describe("viewCategoryProducts", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    cy.get('a[href="#Women"]').click();
    cy.get("a[href='/category_products/2']").click();
    cy.get(".title.text-center").should("be.visible");
    cy.get('a[href="#Men"]').click();
    cy.get("a[href='/category_products/6']").click();
    cy.get(".title.text-center").should("be.visible");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that categories are visible on left side bar
// 4. Click on 'Women' category
// 5. Click on any category link under 'Women' category, for example: Dress
// 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
// 7. On left side bar, click on any sub-category link of 'Men' category
// 8. Verify that user is navigated to that category page
//  