var navigateAmazonPage = {
  amazonSearch: function () {
    this.api.pause(1000);
    const form = getData();
    return this.waitForElementVisible('@searchBar', 1000)
      .setValue('@searchBar', form.Search)
      .click('@searchButton')
  },
  resultSearch: function () {
    this.api.pause(1000);
    const form = getData();
    return this.waitForElementVisible('@firstResult', 1000)
      .click('@firstResult')
      .assert.textEquals('@priceResult','')
      .click('@addToCartButton')
      .click('@deleteCartButton')
      .assert.textEquals('@cartValidation', '0')

  }
};

function getData() {
  return require('../../dataExternal/amazonData');
};

module.exports = {
  url: 'https://www.amazon.com/',
  commands: [navigateAmazonPage],
  elements: {
    searchBar: {
      selector: "//input[@name='field-keywords']",
      locateStrategy: 'xpath'
    },
    searchButton: {
      selector: "//input[@value='Go']",
      locateStrategy: 'xpath'
    },
    firstResult: {
      selector: "//span[contains(text(), 'Ultra 5G Factory')] ",
      locateStrategy: 'xpath'
    },
    priceResult: {
      selector: "//span[contains(@class, 'a-offscreen') and text() = '$429.99']",
      locateStrategy: 'xpath'
    },
    addToCartButton: {
      selector: "//input[@id='add-to-cart-button']",
      locateStrategy: 'xpath'
    }
    ,
    deleteCartButton: {
      selector: "//input[@title='Delete']",
      locateStrategy: 'xpath'
    },
    cartValidation:{
      selector:"//span[@id='nav-cart-count']",
      locateStrategy: 'xpath'
    }
  }
};