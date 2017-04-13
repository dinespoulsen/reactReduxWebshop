var expect = require('chai').expect;
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
By = webdriver.By;

const mochaTimeOut = 30000; //ms

test.describe('Frontpage', function() {
  this.timeout(mochaTimeOut);
  test.it('has a logo', function () {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get('http://localhost:3000/');
    driver.isElementPresent(webdriver.By.id('logo')).then(function(present) {
      expect(present).to.equal(true);
    });
    driver.quit();
  });
});

test.describe('When adding to cart', function() {
  this.timeout(mochaTimeOut);
  test.it('should increase the cart counter', function () {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get('http://localhost:3000/');
    var element = driver.findElement(By.id("1"));
    element.click();
    driver.findElement(By.id("cartCounter")).getText().then(function(text) {
      expect(text).to.equal("1");
    });
    driver.quit();
  });
});
