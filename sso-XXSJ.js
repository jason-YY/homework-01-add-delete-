require("chromedriver")    //项目依赖
var webdriver = require("selenium-webdriver"), 
    By = webdriver.By,                  
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();
//登录SSO
driver.get("http://ssouat.rajax.me/auth/entry")

//点击输入框
driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div:nth-child(2) > input")).click();

//等待一秒，输入用户名
driver.sleep(1 * 1000).then(function () {
var element = driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div:nth-child(2) > input"));
element.sendKeys("yandan.zhang");
}) 
//点击登录按钮
driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div.btn.btn-default.btn-user.loginbtn")).click();
//进入内部信息系统
driver.findElement(By.css("body > div:nth-child(3) > div.row.logolist > div > div > div.col-sm-offset-1.col-md-offset-1.col-xs-offset-1.col-lg-offset-1.col-lg-3.col-md-3.col-sm-3.col-xs-3.icondiv > div > a > div.iconb > img")).click();
//进入“ACT”
driver.findElement(By.css("body > div.container-fluid.bg > div.row.logolist > div > div > div:nth-child(1)")).click();

//等待两秒进入人事类流程，展开下拉列表
driver.sleep(2*1000).then(function(){
driver.findElement(By.css("#app > div > aside > section.process > ul > li:nth-child(2) > h4")).click(); //下拉列表
})
//由下拉列表进入休假申请
driver.sleep(2*1000).then(function(){
driver.findElement(By.css("#app > div > aside > section.process > ul > li:nth-child(2) > ul > li:nth-child(1) > a")).click(); //下拉列表
})
//点击下拉框
driver.sleep(3*1000).then(function(){
driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(1) > div > div > div.el-input > input")).click();
})
//在下拉框中选择年假
driver.sleep(2*1000).then(function(){
driver.findElement(By.css("body > div.el-select-dropdown > div > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)")).click(); //下拉列表
})
//等待两秒填写假期联系电话
driver.sleep(1 * 1000).then(function () {
var element = driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(6) > div > div > input"));
element.sendKeys("1234567890");
}) 
//等待两秒输入交接情况
driver.sleep(1 * 1000).then(function () {
var element = driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(7) > div > div > input"));
element.sendKeys("测试数据01");
})
//等待两秒输入相关说明
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(8) > div > div > textarea")).click();
var element = driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(8) > div > div > textarea"));
element.sendKeys("测试数据02");
})
//点击休假开始时间控件
driver.sleep(1 * 1000).then(function () {
driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(11) > div > div > input")).click();
}) 
//选择月份，点三次
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div.el-picker-panel.el-date-picker.has-time > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click(); //下拉列表
driver.findElement(By.css("body > div.el-picker-panel.el-date-picker.has-time > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click();
driver.findElement(By.css("body > div.el-picker-panel.el-date-picker.has-time > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click();
})
//选择日期12
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div.el-picker-panel.el-date-picker.has-time > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(4) > td:nth-child(3)")).click();
})
//点击确定
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div.el-picker-panel.el-date-picker.has-time > div.el-picker-panel__footer > button")).click();
})
//选择休假结束时间控件
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div:nth-child(12) > div > div > input")).click();
})
//点击三次
driver.sleep(1*1000).then(function(){
driver.findElement(By.css("body > div:nth-child(7) > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click();
driver.findElement(By.css("body > div:nth-child(7) > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click();
driver.findElement(By.css("body > div:nth-child(7) > div.el-picker-panel__body-wrapper > div > div.el-date-picker__header > button.el-picker-panel__icon-btn.el-date-picker__next-btn.el-icon-arrow-right")).click();
})
//选择日期
driver.findElement(By.css("body > div:nth-child(7) > div.el-picker-panel__body-wrapper > div > div.el-picker-panel__content > table.el-date-table > tbody > tr:nth-child(4) > td:nth-child(5)")).click();
//点击确定
driver.findElement(By.css("body > div:nth-child(7) > div.el-picker-panel__footer > button")).click();
//点击提交
driver.sleep(3*1000).then(function(){
driver.findElement(By.css("body > div.act-wrapper > div.act-wrapper__container > div > main > div:nth-child(3) > section > form > div.act-form__button > button:nth-child(2) > span")).click();


})



driver.sleep(8 * 1000).then(function () {      //sleep for 5'
    //close the chrome
    return driver.quit();
})