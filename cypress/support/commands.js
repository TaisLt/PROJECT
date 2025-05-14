const { faker } = require("@faker-js/faker");

Cypress.Commands.add("visitAndVerifyHomePage", () => {
  cy.visit("/");
  cy.url().should("eq", "https://automationexercise.com/");
  cy.get("#slider-carousel").should("be.visible");
});

Cypress.Commands.add("registerUser", () => {
  const user = {
    sex: faker.person.sex(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
  };

  cy.get('[href="/login"]').click();
  cy.get(".signup-form h2").should("have.text", "New User Signup!");
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.get(".login-form > h2 b").should("have.text", "Enter Account Information");

  if (user.sex === "male") {
    cy.get("#id_gender1").click();
    cy.get("#id_gender1").should("be.checked");
  } else {
    cy.get("#id_gender2").click();
    cy.get("#id_gender2").should("be.checked");
  }

  cy.get('[data-qa="password"]').type(user.password);
  cy.get('[data-qa="days"]').select("10");
  cy.get('[data-qa="months"]').select("7");
  cy.get('[data-qa="years"]').select("1983");

  cy.get("#newsletter").click();
  cy.get("#optin").click();

  cy.get("#first_name").type(user.firstName);
  cy.get("#last_name").type(user.lastName);
  cy.get("#company").type(user.company);
  cy.get("#address1").type(user.address1);
  cy.get("#address2").type(user.address2);

  cy.get("#country")
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length);
      cy.get("#country").select(options[randomIndex].innerText);
    });

  cy.get("#state").type(user.state);
  cy.get("#city").type(user.city);
  cy.get("#zipcode").type(user.zipcode);
  cy.get("#mobile_number").type(user.phoneNumber);

  cy.get('[data-qa="create-account"]').click();

  cy.url().should("include", "account_created");
  cy.contains("Account Created!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
  cy.get(":nth-child(10) > a").should(
    "have.text",
    ` Logged in as ${user.name}`
  );
  // Reset Cypress environment variables:
  Cypress.env({});

  // Write to `.env` file:
  const envContent = Object.entries(user)
    .map(([key, value]) => `${key.toUpperCase()}=${value}`)
    .join("\n");

  cy.writeFile("cypress/fixtures/registerUser.env", envContent).then(() => {
    cy.readFile("cypress/fixtures/registerUser.env").then((envData) => {
      envData.split("\n").forEach((line) => {
        const [key, value] = line.split("=");
        if (key && value) {
          Cypress.env(key.trim(), value.trim());
        }
      });
    });
  });

  // Explicitly Store Values in Cypress Environment:
  Cypress.env("EMAIL", user.email);
  Cypress.env("PASSWORD", user.password);
  Cypress.env("NAME", user.name);
  Cypress.env("TEXTAREA", user.textArea);
  Cypress.env("ADDRESS1", user.address1);
  Cypress.env("ADDRESS2", user.address2);
});

Cypress.Commands.add("deleteAccount", () => {
  cy.get('ul.nav li > a[href="/delete_account"]').click();

  cy.url().should("include", "/delete_account");
  cy.get("h2 > b").should("have.text", "Account Deleted!");

  cy.get('[data-qa="continue-button"]').click();
  cy.url().should("include", "/");
});

Cypress.Commands.add("fillReview", () => {
  const review = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    review: faker.lorem.sentence(),
  };
  cy.get("#name").type(review.name);
  cy.get("#email").type(review.email);
  cy.get("#review").type(review.review);
  cy.get('#button-review').click();
});
