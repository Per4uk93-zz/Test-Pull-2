let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

const babel = require("babel-register");



exports.config = {
    //directConnect: true,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 90000,
    getPageTimeout: 10000,
    //SELENIUM_PROMISE_MANAGER: false,   
    capabilities: {
        browserName: 'chrome',
    },

    specs: [
        './YandexSpec/*Spec.js',

    ],

    onPrepare:  function() {
        
        browser.driver.manage().window().maximize();

        browser.ignoreSynchronization=true;

        jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: true,
        }
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({

        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,

        consolidate: false,
        consolidateAll: false,

        savePath: 'C:/Users/Sergey/protractor2/screenshots'

    }));

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    beforeEach(() => {
        
        let matchers = require('jasmine-protractor-matchers')
        jasmine.addMatchers(matchers);
     });
},

jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000,
        print: function() {}
},

multiCapabilities: [
        //{'browserName': 'internet explorer'},
        //{'browserName': 'chrome'},
        //{'browserName': 'firefox'}
    ],

    maxSessions: 1,


  /*chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=1366,768" ]
  }*/


};
