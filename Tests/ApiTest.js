module.exports = {
    before: function (browser) {
    },

    'API Testing - GET One': function (browser) {
        var apiUrl = 'https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=bv6VTNN3tEKLpWv8iqxfvlzNZ4wd6QohzSMuMrlC'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
        })
    },

    'API Testing - GET Two': function (browser) {
        var apiUrl = 'http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=bv6VTNN3tEKLpWv8iqxfvlzNZ4wd6QohzSMuMrlC'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/register'
        var postData = {'email':'eve.holt@reqres.in', 'password':'pistol'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.id, '4')
            browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
        })
    }
};