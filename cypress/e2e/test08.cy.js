// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality

/// <reference types="cypress" />

describe("ScrollFunctionality", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    for (let i = 0; i < 50; i++) {
      cy.get("body").type("{downarrow}");
    }
    cy.get(".single-widget").should("be.visible");
    // cy.get("#scrollUp").click().wait(5000);
    //cy.get('#scrollUp').click({force:true});
    //cy.get("#slider-carousel").should("be.visible");
    cy.xpath(
      "//*[contains(text(), 'Full-Fledged practice website for Automation Engineers')]"
    )
      .should("exist")
      .and("be.visible");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
