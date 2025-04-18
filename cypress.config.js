const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: process.env.CI !== 'true',
  videoUploadOnPasses: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://citation-dev--gracious-gates-eda4d9.netlify.app/',
    LIVE_URL: 'https://citation.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: true,
    RECORD_KEY: '03d210d2-c435-46eb-952f-4e6e24286dc0',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://citation-dev--gracious-gates-eda4d9.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
