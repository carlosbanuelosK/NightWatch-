module.exports = {
  'test command example' : function(browser) {
    var unosquare = browser.page.mainpage();
    unosquare
    .navigate()
    .contactUnosquare()
    .multiplePages()
    browser.end();
  }
};