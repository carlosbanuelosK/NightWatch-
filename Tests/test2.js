module.exports = {
    'exercise' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .assert.visible('body')
      .assert.containsText('.regular16px ', 'Guide')
      .click("div a[href='https://nightwatchjs.org/guide/overview/what-is-nightwatch.html']")
      .assert.urlContains('nightwatchjs.org/')
      .setValue('input[type=search]', 'Assert')
      .assert.not.elementPresent('.not_present')
      .useXpath() // every selector now must be xpath
      .click("//*[@id='doc-sidebar-nav']/div/ul/li[1]/a")
      .click("//a[contains(text(), 'Blog')]")
      .assert.containsText('//p[@class="address"]', 'Nightwatch.js was initially created in Oslo, Norway')
      .end();
    }
  };