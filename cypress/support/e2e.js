
        // Import commands.js using ES2015 syntax:
        import './commands';
        import "cypress-fill-command";

        beforeEach(() => {
          Cypress.on("uncaught:exception", () => {
            return false;
          });
        });