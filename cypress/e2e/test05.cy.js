// Test Case 17: Remove Products From Cart

/// <reference types="cypress" />

describe("RemoveProductsFromCart", () => {
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
    cy.get("tr[id='product-28'] i[class='fa fa-times']").click();
    cy.get("tr[id='product-29'] i[class='fa fa-times']").click();
    cy.get("p[class='text-center'] b").should("have.text", "Cart is empty!");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click 'X' button corresponding to particular product
// 8. Verify that product is removed from the cart
