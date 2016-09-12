load("init.js");
load("pages/SearchPage.js");


testOnAllDevices("Home page", "http://axatrikx.com", function (driver, device) {
	var searchPge = new SearchPage(driver).waitForIt();
	searchPge.doSearch("Selenium");
    checkLayout(driver, "specs/homepage.gspec", device.deviceName);
});