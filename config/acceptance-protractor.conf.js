// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
// var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../src/**/*.feature',
    '../src/**/*.step.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'localhost:4200/',
  framework: 'custom',

  // path relative to the current config file
  // frameworkPath: require.resolve('protractor-cucumber-framework'),
  frameworkPath: ('../node_modules/protractor-cucumber-framework'),
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    // require('ts-node').register({
    //   project: 'e2e'
    // });
  },
  onPrepare: function() {
    // jasmine.getEnv().addReporter(new SpecReporter());
  }
};



