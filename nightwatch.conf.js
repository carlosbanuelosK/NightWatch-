module.exports = {
    page_objects_path:[ 'PageObjects/Unosquare','PageObjects/Nightwatch'],
    src_folders: ["Tests"],

    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: [
        ]
    },
    test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                browserName: 'chrome',
                loggingPrefs: { 'browser': 'ALL' },
                chromeOptions : {
                    "args" : ["start-maximized"]
                }
            }
        }
    }
};