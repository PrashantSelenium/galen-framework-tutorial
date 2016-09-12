var devices = {
  // mobile: {
  //   deviceName: "mobile",
  //   size: "400x700"
  // },
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
  // firefox: {
  //   browserName: "firefox"
  // },
  chrome: {
    browserName: "chrome"
  }
};

// // run test for all devices and browsers
// forAll(devices, function () {
//   forAll(browsers, function () {
//     test("Test on ${browserName} on ${deviceName}", function (device, browser) {
//     var driver = createDriver("http://axatrikx.com", device.size, browser.browserName);

//     // Checking layout on the page
//     checkLayout(driver, "specs/homepage.gspec", device.deviceName);

//     // Quiting the browser
//     driver.quit();
//     });
//   }); 
// });

test("Test on tablet", function (device, browser) {
var driver = createDriver("http://axatrikx.com", "600x800", "chrome");

// Checking layout on the page
checkLayout(driver, "specs/homepage.gspec", "tablet");

// Quiting the browser
driver.quit();
});