// Test Case 7: Verify Test Cases Page

/// <reference types="cypress" />

describe("VerifyTestCasesPage", () => {
  it("passes", () => {
    cy.visitAndVerifyHomePage();
    cy.get("#slider-carousel").should("be.visible");
    cy.get('header[id="header"] li:nth-child(5) a:nth-child(1)').click();
    cy.get(".title.text-center").should("be.visible");
  });
});
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully
