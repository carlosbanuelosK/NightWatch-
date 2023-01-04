var validateAssert = {
    assertNightwatch: function(){
      this.api.pause(1000);
      return this.waitForElementVisible('body')
      .assert.visible('body')
      .click('@guideMenu')
      .setValue('input[type=search]', 'Assertions')
      .useXpath() 
      .click("//*[@id='doc-sidebar-nav']/div/ul/li[1]/a")
      .assert.urlEquals('https://nightwatchjs.org/guide/writing-tests/adding-assertions.html')
      .useCss()
      .assert.enabled('div a[href = "https://nightwatchjs.org/about/community/"]')
      .assert.titleContains('Nightwatch.js')
    }
};

var multipleClicks = {
  navigateInPage: function(){
    this.api.pause(1000);
    return this.waitForElementVisible('body')
    .assert.visible('body')
    .click('@guideMenu')
    .click('@apiMenu')
    .click('@communityMenu')
    
  }
};
module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [validateAssert, multipleClicks],
    elements: {
      guideMenu: {
        selector: "div a[href = 'https://nightwatchjs.org/guide/overview/what-is-nightwatch.html']"
      },
      apiMenu: {
        selector: "div a[href = 'https://nightwatchjs.org/api/']"
      },
      communityMenu: {
        selector: "div a[href = 'https://nightwatchjs.org/about/community/']"
      }
    }
  };