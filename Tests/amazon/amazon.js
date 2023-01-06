module.exports = {
  'test pages validation': function (browser) {
    var amazon = browser.page.landingpage();

    amazon
      .navigate()
      .changeZip()
      .amazonSearch()
      .resultSearch()
    browser.end();
  }
};