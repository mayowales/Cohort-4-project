
const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', browserify.default(config));

  return config;

}

module.exports = defineConfig({
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    defaultCommandTimeout: 10000,
    viewportHeight: 938,
    viewportWidth: 1520,
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
    