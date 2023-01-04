module.exports = {
    'exercise' : function(browser) {
       var nightwatch = browser.page.landingpage();

       nightwatch
      .navigate()
      .assertNightwatch()
      .navigateInPage()
      .end();
    }
  };