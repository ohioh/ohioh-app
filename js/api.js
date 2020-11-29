function setCookiesetting(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookiesetting(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookiesetting(cname) {
  var user = getCookie(cname);
  if (user != "") {
    return true;
  } else {
    return false;
  }
}

// Add a global error event listener early on in the page load, to help ensure that browsers
// which don't support specific functionality still end up displaying a meaningful message.

var gpsenable = 0,
  personalenable = 0,
  privateenable = 0;

function clearlog() {
  ChromeSamples.clearLog();
}

function enablegps() {
  var checkBox = document.getElementById("GPS");
  console.log("GPS..." + gpsenable);
  if (checkBox.checked == true) {
    gpsenable = 1;
  } else {
    gpsenable = 0;
  }
  setCookiesetting("gps", gpsenable, 100000);
  console.log(gpsenable);
}

function enablepersonal() {
  var checkBox = document.getElementById("personalData");

  if (checkBox.checked == true) {
    personalenable = 1;
  } else {
    personalenable = 0;
  }
  setCookiesetting("personal", personalenable, 100000);
}
function enableprivate() {
  var checkBox = document.getElementById("private");

  if (checkBox.checked == true) {
    privateenable = 1;
  } else {
    privateenable = 0;
  }
  setCookiesetting("private", privateenable, 100000);
}
async function onButtonClick() {
  if (gpsenable == 1) {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("Latitude : " + latitude);
    console.log("Longitude : " + longitude);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  var flag = 1;

  let options = {};

  options.acceptAllAdvertisements = true;

  try {
    //  log('Requesting Bluetooth Scan with options: ' + JSON.stringify(options));
    const scan = await navigator.bluetooth.requestLEScan(options);

    console.log("Scan started ");
    // log(' acceptAllAdvertisements: ' + scan.acceptAllAdvertisements);
    //  log(' active: ' + scan.active);
    // log(' keepRepeatedDevices: ' + scan.keepRepeatedDevices);
    //log(' filters: ' + JSON.stringify(scan.filters));
    var devices = [];
    navigator.bluetooth.addEventListener("advertisementreceived", (event) => {
      if (event.device.name != null) {
        // log('Advertisement received.');
        function checkAdult(device) {
          //  log('||' + typeof device+'|'+ typeof event.uuids+"||");
          return device + " " == event.uuids + " ";
        }
        if (devices.find(checkAdult)) {
          //log("hhhhhhhhhhhhh");
        } else {
          //log("xxxxxxx");
          devices.push(event.uuids);
          if (1) {
            if (personalenable == 1) {
              VALUE = JSON.stringify({
                email: getCookie("email"),
                uuid: event.uuids + " ",
                rssi: event.rssi + " ",
                devicename: event.device.name,
                txpower: event.txPower + " ",
              });
              console.log(VALUE);

              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              fetch("https://ohioh.app:8442/api/users", {
                method: "POST",
                headers: myHeaders,
                mode: "cors",
                cache: "default",
                body: VALUE,
              })
                .then((data) => data.json())
                .then((data) => {
                  console.log(data);
                  // window.location.href = "https://gui--festive-ardinghelli-674e56.netlify.app/index.html";
                  //   alert("Congrats you are successfully logged in");
                })
                .catch((err) => {
                  console.error(err);
                });
            }

            console.log("Device received.");
            console.log("  Device Name: " + "<i>" + event.device.name + "</i>");
            console.log("  Device ID: " + "<i>" + event.device.id + "</i>");
            console.log("  RSSI: " + event.rssi);
            console.log("  TX Power: " + +event.txPower);

            console.log("  UUIDs: " + "<i>" + event.uuids + "</i>");
            console.log(
              "  Time: " +
                "<i>" +
                new Date(
                  new Date().getTime() + 4 * 60 * 60 * 1000
                ).toLocaleTimeString() +
                "</i>"
            );
            console.log("......................................");
            event.manufacturerData.forEach((valueDataView, key) => {
              logDataView("Manufacturer", key, valueDataView);
            });
            event.serviceData.forEach((valueDataView, key) => {
              logDataView("Service", key, valueDataView);
            });
          }
        }
      }
    });

    setTimeout(stopScan, 10000);
    function stopScan() {
      // log('Stopping scan...');
      // scan.stop();
      // log('Stopped.  scan.active = ' + scan.active);
      //    scan = await navigator.bluetooth.requestLEScan(options);
      //    log('Stopped.  scan.active = ' + scan.active);
    }
  } catch (error) {
    console.log("Argh! " + error);
  }
}

/* Utils */

const logDataView = (labelOfDataSource, key, valueDataView) => {
  const hexString = [...new Uint8Array(valueDataView.buffer)]
    .map((b) => {
      return b.toString(16).padStart(2, "0");
    })
    .join(" ");
  const textDecoder = new TextDecoder("ascii");
  const asciiString = textDecoder.decode(valueDataView.buffer);
  console.log(
    `  ${labelOfDataSource} Data: ` +
      key +
      "\n    (Hex) " +
      hexString +
      "\n    (ASCII) " +
      asciiString
  );
};

function isWebBluetoothEnabled() {
  if (navigator.bluetooth) {
    return true;
  } else {
    ChromeSamples.setStatus(
      "Web Bluetooth API is not available.\n" +
        'Please make sure the "Experimental Web Platform features" flag is enabled.'
    );
    return false;
  }
}

var usernumber, contactnumber;

fetch("https://ohioh.app:8442/api/users")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    var count = Object.keys(data).length;
    console.log(count);
    console.log(data);
    document.getElementById("contact").innerHTML = count;
  });

fetch("https://ohioh.app:8443/")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    var count = Object.keys(data).length;
    console.log("number of users" + count);
    console.log(data);
    document.getElementById("download").innerHTML = count;
    document.getElementById("donate").innerHTML = count;
  });
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  if (checkCookiesetting("gps")) {
    gpsenable = getCookiesetting("gps");
  }
  if (checkCookiesetting("private")) {
    gpsenable = getCookiesetting("private");
  }
  if (checkCookiesetting("personal")) {
    gpsenable = getCookiesetting("personal");
  }
  var user = getCookie("email");
  console.log("cookie:  " + user);
  if (user != "") {
    alert("You are succesfully logged in ");
  } else {
  }
}
