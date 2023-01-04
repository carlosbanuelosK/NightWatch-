var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .setValue('@companyTextField', 'QA CoE course')
      .setValue('@phoneTextField', '3300000000')
      .setValue('@messageTextArea', 'This is a Random Text used in a Course')
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg')
  }
};
var clickinMultiplePages = {
  multiplePages: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .click('@industriesMenu')
      .click('@aboutMenu')
      .click('@servicesMenu')
  }
};

module.exports = {
  url: 'https://www.unosquare.com',
  commands: [validateContactUs, clickinMultiplePages],
  elements: {
    contactusMenu: {
      selector: "li a[href = '/ContactUs']"
    },
    industriesMenu: {
      selector: "li a[href = '/Industries']"
    },
    aboutMenu: {
      selector: "li a[href = '/About']"
    },
    servicesMenu: {
      selector: "li a[href = '/Services']"
    },
    companyTextField: {
      selector: "input.hs-input[name = 'company']"
    },
    phoneTextField: {
      selector: "input.hs-input[name = 'phone']"
    },
    messageTextArea: {
      selector: "textarea.hs-input[name = 'message']"
    },
    submitBtn: {
      selector: "input[value = 'Submit']"
    },
    nameWarningMsg: {
      selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
      locateStrategy: 'xpath'
    }
  }
}