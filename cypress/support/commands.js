
    // ***********************************************
    // Visit https://on.cypress.io/custom-commands to
    // learn more about custom commands.
    // ***********************************************
    //
    //
    // -- This is a parent command --
    // Cypress.Commands.add('login', (email, password) => { ... })
    //
    //
    // -- This is a child command --
    // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
    //
    //
    // -- This is a dual command --
    // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
    //
    //
    // -- This will overwrite an existing command --
    // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
    import { faker} from "@faker-js/faker";
    let data

    before(() => {
      cy.fixture("example").then((ele) => {
        data = ele;
      })
    });
  
    Cypress.Commands.add("selectPhoneOption",()=>{
        cy.get(data.allCat).eq(0).click();
        cy.get(data.phoneOption).click();
    })

    Cypress.Commands.add("searchPhone", ()=>{
        cy.get(data.searchField).eq(0).type('iphone').click();

    })


     Cypress.Commands.add("addProductToCart", () => {
        cy.get(data.hoverPhone)
          .trigger('mouseover')
          .then(() => {
            cy.get(data.addToCart)
              .scrollIntoView()
              .should("be.visible")
              .click({ force: true });
            cy.wait(2000); 
            cy.screenshot("before-popup");
          });
     });

     Cypress.Commands.add("clickCheckoutButton", () => {
       
       const selector = data.checkoutButton;
       cy.get(selector, { timeout: 5000 }) 
         .scrollIntoView()
         .should("be.visible")
         .click(); 
     });

    Cypress.Commands.add("insertValues", (field, text) => {
      cy.get(field).should("exist").fill(text);
    });

   
    Cypress.Commands.add("insertDetails", (field) => {
      switch (field) {
        case "Firstname":
          cy.insertValues(data.firstName, faker.person.firstName());
          break;
        case "Lastname":
          cy.insertValues(data.lastName, faker.person.lastName());
          break;
        case "email":
          cy.insertValues(data.email, faker.internet.email());
          break;
        case "Telephone":
          cy.insertValues(data.telePhone, faker.phone.number("+49176########"));
          break;
        case "Password":
          cy.insertValues(data.password).click().type("Test@1234");
          break;
        case "Confirm password":
          cy.insertValues(data.confrimPassword).click().type("Test@1234");
          break;
        case "Company":
          cy.insertValues(data.company, faker.company.name());
          break;
        case "Address":
          cy.insertValues(data.address,faker.location.streetAddress());
          break;
        case "City":
          cy.insertValues(data.city, "Berlin");
          break;
        case "Post Code":
          cy.insertValues(data.postCode, faker.location.zipCode());
      }
    });

    Cypress.Commands.add("selectDropdownOption", (fieldName) => {
      const fieldSelectors = {
        "Country": {
          dropdownField: data.country,
          optionValue: data.countryOption, 
        },
        "Zone": {
          dropdownField: data.zone,
          optionValue: data.zoneOption, 
        },
      };

      const field = fieldSelectors[fieldName];
      cy.get(field.dropdownField).select(field.optionValue);
     
    });

    Cypress.Commands.add("manageCheckboxState", (checkboxName, action) => {
      const checkboxes = {
        newsletterCheckbox: data.newsLetter,
        termsCheckbox: data.terms,
        privacyCheckbox: data.privacy,
      };

      const selector = checkboxes[checkboxName];

      if (action === "enable") {
        cy.get(selector).not("[enabled]").click({ force:true }); 
      } else if (action === "disable") {
        cy.get(selector).not("[disabled]").click({ force: true });
      } 
    });

    Cypress.Commands.add("clickElement", (elementName) => {
      
        cy.get("button").contains(elementName).should("be.visible").click();
    });