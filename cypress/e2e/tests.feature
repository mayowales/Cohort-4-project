
Feature: Testing an ecommerce site

    Scenario Outline: Verify that a user can order using device
        Given I am on the home page
        When I select phone option
        And I search for a phone
        And I click on the "Search" button
        Then I am redirected to the phone selection page
        When I hover and click the the cart icon
        And I click checkout on pop-up
        Then I am redirected to the checkout page
        When I fill in the "Firstname"
        And I fill in the "Lastname"
        And I fill in the "email"
        And I fill in the "Telephone"
        And I fill in the "Password"
        And I fill in the "Confirm password"
        And I fill in the "Company"
        And I fill in the "Address"
        And I fill in the "City"
        And I fill in the "Post Code"
        And I select the "Country"
        And I select the "Zone"
        And I disable the newsletter checkbox
        And I enable the terms checkbox
        And I enable the privacy checkbox
        And I click on the "Continue" button
        Then I am redirected to the confirmation page
        When I click on the "Confirm Order " button
        Then I am redirected to the Order successful page