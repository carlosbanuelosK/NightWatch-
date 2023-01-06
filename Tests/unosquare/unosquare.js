module.exports = {
  'test pages validation': function (browser) {
    var unosquare = browser.page.mainpage();

    unosquare
      .navigate()
      .blogPage()
      .blogSearch()
      .aboutPage()
    browser.end();
  }
};