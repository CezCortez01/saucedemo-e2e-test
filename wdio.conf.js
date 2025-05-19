import '@wdio/globals';

export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    //reporters: ['spec'],

    reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]
    ],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async function (capabilities, specs) {
        // Optional async hook
    }
}
