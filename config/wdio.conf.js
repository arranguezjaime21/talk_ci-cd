import { environment } from "../src/config/environment.js";
import 'dotenv/config';

export const config = {
    
    runner: 'local',
    port: environment.appiumPort,
    
    specs: [
      '../src/tests/**/*.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": environment.deviceName,
        "appium:appPackage": environment.appPackage,
        "appium:appActivity": environment.appActivity,
        "appium:noReset": true,
        "appium:autoGrantPermissions": true
    }],
    logLevel: 'error',
    
    bail: 0,
   
    waitforTimeout: 15000,
   
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
    
    services: ['appium'],
    
    framework: 'mocha',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
