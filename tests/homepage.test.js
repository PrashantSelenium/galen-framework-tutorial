var devices = {
  tablet: {
    deviceName: "tablet",
    size: "600x800"
  },
  desktop: {
    deviceName: "desktop",
    size: "1366x768"
  }
};

var browsers = {
  firefox: {
    browserName: "firefox"
  },
  chrome: {
    browserName: "chrome"
  }
};

// run test for all devices and browsers
forAll(devices, function () {
  forAll(browsers, function () {
    test("Test on ${browserName} on ${deviceName}", function (device, browser) {
    var driver = createDriver("http://axatrikx.com", device.size, browser.browserName);

    // Checking layout on the page
    checkLayout(driver, "specs/homepage.gspec", device.deviceName);

    // Quiting the browser
    driver.quit();
    });
  }); 
});

