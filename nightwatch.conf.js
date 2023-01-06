module.exports = {
    page_objects_path:[ 'PageObjects/Unosquare','PageObjects/Amazon'],
    skip_testcases_on_fail: false,
    src_folders: ["Tests"],

    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        use_xpath: true,
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
            },
            globals: {
                itemPrice: '',
                detailPrice: '',
                cartPrice: ''
            }
        }
    }
};