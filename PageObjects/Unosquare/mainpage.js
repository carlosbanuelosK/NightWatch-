var navigateUnoPage = {
  blogPage: function () {
    this.api.pause(1000);
    const form = getData(); 
    return this.waitForElementVisible('@blogMenu', 1000)
      .click('@blogMenu')
      .assert.titleContains('Digital Transformation Blog')
      .assert.urlEquals('https://blog.unosquare.com/')
      .assert.visible('@recentLabel')
      .assert.visible('@popularLabel')
  },
  blogSearch: function () {
    this.api.pause(1000);
    const form = getData(); 
    return this.waitForElementVisible('@searchBar', 1000)
      .setValue('@searchBar', form.QA)
      .click('@searchButton')
      .setValue('@searchBar', form.Development)
      .click('@searchButton')
      .setValue('@searchBar', form.Java)
      .click('@searchButton')
      .setValue('@searchBar', form.Testing)
      .click('@searchButton')
      .waitForElementVisible('@searchBar')
      
  },
  aboutPage: function () {
    this.api.pause(1000);
    const form = getData(); 
    return this.waitForElementVisible('@aboutMenu', 1000)
      .click('@aboutMenu')
      .expect.element('@marioDiVece').text.to.equal('MARIO DI VECE')
      .expect.element('@gianDiVece').text.to.equal('GIANCARLO DI VECE')
      .expect.element('@eduardoArias').text.to.equal('EDUARDO ARIAS')
      .expect.element('@ignacioMiranda').text.to.equal('IGNACIO MIRANDA')
      .expect.element('@diegoHuerta').text.to.equal('DIEGO HUERTA')
  }
};

function getData() {
  return require('../../dataExternal/unosquareData'); 
  };

module.exports = {
  url: 'https://www.unosquare.com',
  commands: [navigateUnoPage],
  elements: {
    blogMenu: {
      selector: "//a[contains(text(), 'Blog')]",
      locateStrategy: 'xpath'
    },
    aboutMenu: {
      selector: "//a[contains(text(), 'About')]",
      locateStrategy: 'xpath'

    },
    recentLabel: {
      selector: "//label[contains(text(), 'RECENT')]",
      locateStrategy: 'xpath'
    },
    popularLabel: {
      selector: "//label[contains(text(), 'POPULAR')]",
      locateStrategy: 'xpath'
    },
    searchBar: {
      selector: "//input[@id='search-bar']",
      locateStrategy: 'xpath'
    },
    searchButton: {
      selector: "//button[@type='submit']",
      locateStrategy: 'xpath'
    },
    marioDiVece: {
      selector: "//span[contains(text(), 'Mario')]",
      locateStrategy: 'xpath'
    },
    gianDiVece: {
      selector: "//span[contains(text(), 'Giancarlo')]",
      locateStrategy: 'xpath'
    },
    eduardoArias: {
      selector: "//span[contains(text(), 'Eduardo')]",
      locateStrategy: 'xpath'
    },
    ignacioMiranda: {
      selector: "//span[contains(text(), 'Ignacio')]",
      locateStrategy: 'xpath'
    },
    diegoHuerta: {
      selector: "//span[contains(text(), 'Diego')]",
      locateStrategy: 'xpath'
    }
  }
};