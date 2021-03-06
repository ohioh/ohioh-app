  /*With this function we will get user info which is saved in cookie
  the parameter of this function is cookie name which will return the cookie value*/
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

/*This function is for send button , after presing send button this function will send 
the scanned data to server. 

*/
function datasend() {
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

// Add a global error event listener early on in the page load, to help ensure that browsers
// which don't support specific functionality still end up displaying a meaningful message.
window.addEventListener("error", function (error) {
  if (ChromeSamples && ChromeSamples.setStatus) {
    console.error(error);
    ChromeSamples.setStatus(
      error.message + " (Your browser may not support this feature.)"
    );
    error.preventDefault();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URL(location).searchParams;
  const inputs = Array.from(document.querySelectorAll("input[id]"));

  inputs.forEach((input) => {
    if (searchParams.has(input.id)) {
      if (input.type == "checkbox") {
        input.checked = searchParams.get(input.id);
      } else {
        input.value = searchParams.get(input.id);
        input.blur();
      }
    }
    if (input.type == "checkbox") {
      input.addEventListener("change", function (event) {
        const newSearchParams = new URL(location).searchParams;
        if (event.target.checked) {
          newSearchParams.set(input.id, event.target.checked);
        } else {
          newSearchParams.delete(input.id);
        }
        history.replaceState(
          {},
          "",
          Array.from(newSearchParams).length
            ? location.pathname + "?" + newSearchParams
            : location.pathname
        );
      });
    } else {
      input.addEventListener("input", function (event) {
        const newSearchParams = new URL(location).searchParams;
        if (event.target.value) {
          newSearchParams.set(input.id, event.target.value);
        } else {
          newSearchParams.delete(input.id);
        }
        history.replaceState(
          {},
          "",
          Array.from(newSearchParams).length
            ? location.pathname + "?" + newSearchParams
            : location.pathname
        );
      });
    }
  });
});
/*
This is class function. with this class we can print our log into the log class.
There are four function in Chromesample class. Every funtion has it own functionality
*/
var ChromeSamples = {

//for live output

  log: function () {
    var line = Array.prototype.slice
      .call(arguments)
      .map(function (argument) {
        return typeof argument === "string"
          ? argument
          : JSON.stringify(argument);
      })
      .join(" ");

    document.querySelector("#log").innerHTML += line + "\n";
  },
//For clearing the log
  clearLog: function () {
    document.querySelector("#log").textContent = "";
  },
//For setting the statun in status html class
  setStatus: function (status) {
    document.querySelector("#status").textContent = status;
  },
//For setting the content in contetn html class
  setContent: function (newContent) {
    var content = document.querySelector("#content");
    while (content.hasChildNodes()) {
      content.removeChild(content.lastChild);
    }
    content.appendChild(newContent);
  },
};

if (/Chrome\/(\d+\.\d+.\d+.\d+)/.test(navigator.userAgent)) {
  // Let's log a warning if the sample is not supposed to execute on this
  // version of Chrome.
  if (79 > parseInt(RegExp.$1)) {
    ChromeSamples.setStatus(
      "Warning! Keep in mind this sample has been tested with Chrome " +
      79 +
      "."
    );
  }
}
// Her we declare the checkbox value variable 
var gpsenable = 0,
  intervalenable = 0,
  personalenable = 0;

  //function for clear log button
function clearlog() {
  ChromeSamples.clearLog();
}
//This the function for gps checkbox which will change the gps enable variable according to check satus
function enablegps() {
  var checkBox = document.getElementById("GPS");
  console.log("GPS..." + gpsenable);
  if (checkBox.checked == true) {
    gpsenable = 1;
  } else {
    gpsenable = 0;
  }
  console.log(gpsenable);
}
//This the function for interval checkbox which will change the intervalenable variable according to check satus
function enableintrval() {
  var checkBox = document.getElementById("Interval");

  if (checkBox.checked == true) {
    intervalenable = 1;
  } else {
    intervalenable = 0;
  }
  console.log(intervalenable);
}
//This the function for sending personal data checkbox which will change the gps enable variable according to check satus
function enablepersonal() {
  var checkBox = document.getElementById("personalData");

  if (checkBox.checked == true) {
    personalenable = 1;
  } else {
    personalenable = 0;
  }
    console.log(personalenable);
}
var ohioh;
var   VALUE;
// This is the function for scanning system
async function onButtonClick() {
  if (gpsenable == 1) {
    if (!navigator.geolocation) {
      log("Geolocation is not supported by your browser");
    } else {
      log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  var scan = document.getElementById("Dauer");
  
  var scantime = scan.value;
  console.log('Scan time '+scan.value);
  var inter = document.getElementById("Interval");
  var intervaltime = inter.value;
  console.log('Interval time '+inter.value);
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    log("Latitude : " + latitude);
    log("Longitude : " + longitude);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

// interval flag

  var flag = 1;
  if (intervalenable == 1) {
    scanon();
  }

  function scanon() {
    setTimeout(function () {
      log("Scan off");
      flag = 0;
      scanoff();
    }, scantime);
  }

  function scanoff() {
    setTimeout(function () {
      log("Scan start");

      flag = 1;
      scanon();
    }, intervaltime);
  }
  let options = {};

  options.acceptAllAdvertisements = true;

  try {
    //  log('Requesting Bluetooth Scan with options: ' + JSON.stringify(options));
    const scan = await navigator.bluetooth.requestLEScan(options);

    log("Scan started ");
    // log(' acceptAllAdvertisements: ' + scan.acceptAllAdvertisements);
    //  log(' active: ' + scan.active);
    // log(' keepRepeatedDevices: ' + scan.keepRepeatedDevices);
    //log(' filters: ' + JSON.stringify(scan.filters));
    var devices = [];
    navigator.bluetooth.addEventListener(
      "advertisementreceived",
      (event) => {
        event.manufacturerData.forEach((valueDataView, key) => {
        logDataView('Manufacturer', key, valueDataView);
      });
        if (event.device.name != null && flag == 1 && event.uuids+' ' == '0000280f-0000-1000-8000-6f68696f680a'+' ' && ohioh+' ' == 'OHI'+' ' ) {
          
          // checking duplicate devices , if there is any device is being 
          //found then it will check in devices arraay
          function checkAdult(device) {
           
            
            return device + " " == event.device.name + " ";
          }
          if (devices.find(checkAdult)) {
            
          } else {
            
            devices.push(event.device.name);
                var checkBox = document.getElementById("GPS");
  console.log("GPS..." + gpsenable);
  if (checkBox.checked == true) {
    gpsenable = 1;
  } else {
    gpsenable = 0;
  }
  console.log('gps:  '+gpsenable);
   var checkBox = document.getElementById("personalData");

  if (checkBox.checked == true) {
    personalenable = 1;
  } else {
    personalenable = 0;
  }
  
    console.log('personal data '+personalenable);
            if (1) {
              //sending json  data throw fetch function 
                VALUE = JSON.stringify({
                email: getCookie("email"),
                uuid: event.uuids + " ",
                rssi: event.rssi + " ",
                devicename: event.device.name,
                txpower: event.txPower + " ",
              });
              if (personalenable == 1) {
            

                console.log(VALUE);
//Adding header with headr data
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
// here is the statement of logging data

              log("Device received.");
              log("  Device Name: " + "<i>" + event.device.name + "</i>");
              log("  Device ID: " + "<i>" + event.device.id + "</i>");
              log("  RSSI: " + event.rssi);
              log("  TX Power: " + +event.txPower);

              log("  UUIDs: " + "<i>" + event.uuids + "</i>");
              log(
                "  Time: " +
                "<i>" +
                new Date(
                  new Date().getTime() + 4 * 60 * 60 * 1000
                ).toLocaleTimeString() +
                "</i>"
              );
              log("......................................");
           

            }
          }
        }
      }
    );
//in this function we have called  a timer , thus we can stop the 
// scanning function
    setTimeout(stopScan, 10000);
    function stopScan() {
      // log('Stopping scan...');
      // scan.stop();
      // log('Stopped.  scan.active = ' + scan.active);
      //    scan = await navigator.bluetooth.requestLEScan(options);
      //    log('Stopped.  scan.active = ' + scan.active);
    }
  } catch (error) {
    log("Argh! " + error);
  }
}

/* Utils */
//Logdata view is another function of viewing loggs
const logDataView = (labelOfDataSource, key, valueDataView) => {
  const hexString = [...new Uint8Array(valueDataView.buffer)]
    .map((b) => {
      return b.toString(16).padStart(2, "0");
    })
    .join(" ");
  const textDecoder = new TextDecoder("ascii");
  const asciiString = textDecoder.decode(valueDataView.buffer);
  ohioh = asciiString;
  
};

document
  .querySelector("form")
  .addEventListener("submit", function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (isWebBluetoothEnabled()) {
      ChromeSamples.clearLog();
      onButtonClick();
    }
  });

log = ChromeSamples.log;

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

/* jshint ignore:start */
(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);
ga("create", "UA-53563471-1", "auto");
ga("send", "pageview");
  /* jshint ignore:end */


