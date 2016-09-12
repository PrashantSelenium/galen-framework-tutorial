var devices = {
  // tablet: {
  //   deviceName: "tablet",
  //   size: "600x800"
  // },
  desktop: {
    deviceName: "desktop",
    size: "1366x768"
  }
};

var browsers = {
  // firefox: {
  //   browserName: "firefox"
  // },
  chrome: {
    browserName: "chrome"
  }
};

function getDriver(url, size, browser) {
	var driver = createDriver(url, size, browser);
	session.put("driver", driver);
    return driver;
}

/*
This function will be used in our tests in order to create 
a list of tests parameterize for each device that we have defined in the begining
*/
function testOnAllDevices(testNamePrefix, url, callback) {
    forAll(devices, function () {
    	forAll(browsers, function () {
	        test(testNamePrefix + " on ${deviceName} device", function (device, browser) {
		        var driver = getDriver(url, device.size, browser.browserName);
		        callback.call(this, driver, device);
		    });
	    });
    });
}

afterTest(function (test) {
    var driver = session.get("driver");
    if (driver != null) {
        driver.quit();
    }
});

