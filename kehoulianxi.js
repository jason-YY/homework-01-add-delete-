require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://autowebtest.github.io/add-remove/');

for (var info of imput.info){

driver.get('https://autowebtest.github.io/add-remove/').sendKeys('aaaaaa','bbbbbbb','ccccccc','ddddddd','eeeeee');
driver.get('https://autowebtest.github.io/add-remove/').submit();

driver.findElement(By.css('#text')).sendKeys('aaaaaa','bbbbbbb','ccccccc','ddddddd','eeeeee')

}



driver.quit();