module.exports = {
  'test pages validation': function (browser) {
    var amazon = browser.page.landingpage();

    amazon
      .navigate()
      .amazonSearch()
      .resultSearch()
    browser.end();
  }
};