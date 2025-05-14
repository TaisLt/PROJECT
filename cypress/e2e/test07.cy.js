// Test Case 21: Add review on product

/// <reference types="cypress" />

describe("AddReviewOnProduct", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    cy.get("a[href='/products']").click();
    cy.get(".title.text-center").should("be.visible");
    cy.get("a[href='/product_details/1']").click();
    cy.get("div[class='product-information'] h2").should("be.visible");
    cy.fillReview();
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Click on 'View Product' button
// 6. Verify 'Write Your Review' is visible
// 7. Enter name, email and review
// 8. Click 'Submit' button
// 9. Verify success message 'Thank you for your review.'
