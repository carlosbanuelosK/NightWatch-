var navigateAmazonPage = {
  changeZip: function () {
    this.api.pause(1000);
    const form = getData();
    return this.waitForElementVisible('@changeDeliverTo', 1000)
      .click('@changeDeliverTo')
      .setValue('@sendZip', form.Zip)
      .click('@applyZip')
      .click('@continue')
  },
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
    .getText('@price', function(result){
        this.globals.itemPrice = result.value.trim().replace("\n", ".");
        console.log("Item Price", browser.globals.itemPrice);
      })
      .click('@firstResult')
      .getText('@priceResult', function(result){
        this.globals.detailPrice = result.value.trim().replace("\n", ".");
        console.log("Item price", browser.globals.itemPrice)
        console.log("Detail price", browser.globals.detailPrice)
        browser.assert.equal(browser.globals.itemPrice, browser.globals.detailPrice)
      })
      .pause(1000)
      .click('@addToCartButton')
      .click('@goToCart')
      .getText('@cartPrice', function(result){
        this.globals.cartPrice = result.value;
        console.log("detail price", browser.globals.detailPrice)
        console.log("cart price", browser.globals.cartPrice)
        browser.assert.equal(browser.globals.itemPrice, browser.globals.cartPrice)
      })
      .pause(1000)
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
    changeDeliverTo: {
      selector: "//span[@id='glow-ingress-line1']",
      locateStrategy: 'xpath'
    },
    sendZip: {
      selector: "//input[@id='GLUXZipUpdateInput']",
      locateStrategy: 'xpath'
    },
    applyZip: {
      selector: "//input[@aria-labelledby='GLUXZipUpdate-announce']",
      locateStrategy: 'xpath'
    },
    continue: {
      selector: "//div[@class='a-popover-footer']//input[@id='GLUXConfirmClose']",
      locateStrategy: 'xpath'
    },
    searchBar: {
      selector: "//input[@id='twotabsearchtextbox']",
      locateStrategy: 'xpath'
    },
    searchButton: {
      selector: "//input[@value='Go']",
      locateStrategy: 'xpath'
    },
    firstResult: {
      selector: "//div[@data-component-id='2']/div/div/div/div[2]/div/div/div/h2/a",
      locateStrategy: 'xpath'
    },
    price:{
      selector: "//div[@data-component-id='2']/div/div/div/div[2]/div/div/div/div/div/div/div[1]/a/span",
      locateStrategy: 'xpath'
    },
    priceResult: {
      selector: "//div[@id='corePriceDisplay_desktop_feature_div']/div[1]/span",
      locateStrategy: 'xpath'
    },
    cartPrice: {
      selector: "//td[@class='a-text-right aok-nowrap maple-mathbox__value']",
      locateStrategy: 'xpath'
    },
    addToCartButton: {
      selector: "//input[@id='add-to-cart-button']",
      locateStrategy: 'xpath'
    },
    noThanksButton: {
      selector: "//div[@class='a-row']/div[2]/span/span/input",
      locateStrategy: 'xpath'
    },
    deleteCartButton: {
      selector: "//input[@value='Delete']",
      locateStrategy: 'xpath'
    },
    goToCart: {
      selector: "//a[@id='nav-cart']",
      locateStrategy: 'xpath'
    },
    cartValidation: {
      selector: "//span[@id='nav-cart-count']",
      locateStrategy: 'xpath'
    }
  }
};