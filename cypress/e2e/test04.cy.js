// Test Case 12: Add Products in Cart

/// <reference types="cypress" />

describe("AddProductsInCart", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    cy.get("a[href='/products']").click();
    cy.get(".title.text-center").should("be.visible");
    cy.get("#search_product").type("T-shirt");
    cy.get("#submit_search").click();
    cy.get(".title.text-center").should("be.visible");
    cy.get(".productinfo")
      .first()
      .trigger("mouseover")
      .find(".add-to-cart")
      .click();
    cy.get(".btn.btn-success.close-modal.btn-block").click();
    cy.get(".productinfo")
      .eq(1)
      .trigger("mouseover")
      .find(".add-to-cart")
      .click();
    cy.get(".btn.btn-success.close-modal.btn-block").click();
    cy.get('header[id="header"] li:nth-child(3) a:nth-child(1)').click();
    cy.get(".active").should("be.visible");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Products' button
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price
