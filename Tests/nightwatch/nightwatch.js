module.exports = {
  '@disabled': true,
    'exercise' : function(browser) {
       var nightwatch = browser.page.landingpage();

       nightwatch
      .navigate()
      .assertNightwatch()
      .navigateInPage()
      .end();
    }
  };