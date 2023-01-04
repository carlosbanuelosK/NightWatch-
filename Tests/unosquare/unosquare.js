module.exports = {
    'Blog menu navigation' : function(browser) {
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('body')
      .click('@blogMenu')
      browser.assert.not.cssProperty('input[type=text]', 'placeholder','Search')
      browser.assert.cssProperty('input[type=text]', 'placeholder','')
      .setValue('input[type=text]', 'How to')
      .click('button[type=submit]')
      .waitForElementVisible('body')
      
      browser.end();
    },
    'test pages validation' : function(browser) {
        var unosquare = browser.page.mainpage();
  
        unosquare
        .navigate()
        .waitForElementVisible('body')
        .click('@industriesMenu')
        .waitForElementVisible('body')
        browser.assert.urlEquals('https://www.unosquare.com/Industries');
        browser.assert.titleContains('Digital Transformation')
        browser.end();
      },
      'URL Validation' : function(browser) {
        var unosquare = browser.page.mainpage();
  
        unosquare
        .navigate()
        .waitForElementVisible('body')
        .click('@servicesMenu')
        browser.assert.textContains('li a[href = "/ContactUs"]', 'About Us')
        browser.assert.attributeContains('li a[href = "/About"]', 'href', '/About')
        browser.end();
      },
  };