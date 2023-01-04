module.exports = {
    'exercise' : function(browser) {
       var nightwatch = browser.page.landingpage();

       nightwatch
      .navigate()
      .waitForElementVisible('body')
      .assert.visible('body')
      .click('@guideMenu')
      .setValue('input[type=search]', 'Assertions')
      .useXpath() 
      .click("//*[@id='doc-sidebar-nav']/div/ul/li[1]/a")
      browser.assert.urlEquals('https://nightwatchjs.org/guide/writing-tests/adding-assertions.html')
      .useCss()
      browser.assert.enabled('div a[href = "https://nightwatchjs.org/about/community/"]')
      browser.assert.titleContains('Nightwatch.js')
      .end();
    }
  };