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

When(/^I click the Search button$/, () => {
  cy.searchButton();
});

Then(/^I am navigated to the phone selection page$/, () => {
  cy.url().should(
    "match",
    /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*phone$/
  );
});

When(/^I hover and click the the cart icon$/, () => {
  cy.addProductToCart();
});

When(/^I click checkout on pop-up$/, () => {
  cy.clickCheckoutButton();
});


Then(/^I am redirected to checkout page$/, () => {
  cy.url().should(
    "match",
    /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*checkout$/
  );
});

When(/^I fill in the "([^"]*)"$/, (inputDetails) => {
  cy.insertDetails(inputDetails);
});

When(/^I select the "([^"]*)"$/, (fieldName) => {
  // Trigger the custom command with the field name
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


Then(/^I am redirected to confirmation page$/, () => {
   cy.url().should(
     "match",
     /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*confirm$/
   );
});


Then(/^I am redirected to Order successful page$/, () => {
   cy.url().should(
     "match",
     /^https:\/\/ecommerce-playground\.lambdatest\.io\/.*success$/
   );
});
