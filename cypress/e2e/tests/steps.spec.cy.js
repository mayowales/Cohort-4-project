import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the home page$/, () => {
  cy.visit("/");
});

When(/^I select phone option$/, () => {
  cy.selectPhoneOption();
});

When(/^I search for a phone$/, () => {
  cy.searchPhone();
});

Then(/^I am redirected to the (.*) page$/, (pageName) => {
  const urlMatchers = {
    "phone selection":
      /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*phone$/,
    checkout: /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*checkout$/,
    confirmation: /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*confirm$/,
    "Order successful":
      /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*success$/,
  };

  const expectedUrlPattern = urlMatchers[pageName];
  if (expectedUrlPattern) {
    cy.url().should("match", expectedUrlPattern);
  } else {
    throw new Error(`No matching URL pattern found for page: ${pageName}`);
  }
});

When(/^I hover and click the the cart icon$/, () => {
  cy.addProductToCart();
});

When(/^I click checkout on pop-up$/, () => {
  cy.clickCheckoutButton();
});

When(/^I fill in the "([^"]*)"$/, (inputDetails) => {
  cy.insertDetails(inputDetails);
});

When(/^I select the "([^"]*)"$/, (fieldName) => {
  
  cy.selectDropdownOption(fieldName);
});

When(/^I disable the newsletter checkbox$/, () => {
  cy.manageCheckboxState("newsletterCheckbox", "disable");
});

When(/^I enable the terms checkbox$/, () => {
  cy.manageCheckboxState("termsCheckbox", "enable");
});

When(/^I enable the privacy checkbox$/, () => {
  cy.manageCheckboxState("privacyCheckbox", "enable");
});

When(/^I click on the "([^"]*)" button$/, (buttonText) => {
  cy.clickElement(buttonText);
});