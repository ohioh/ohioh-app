# OHIHO Covid-19 Tracing App
![alt text](https://github.com/ohioh/ohioh-app/blob/master/images/OHIOHicons/Icon-256.png)
![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/madhur-taneja/README-Template)
![GitHub stars](https://img.shields.io/github/stars/madhur-taneja/README-Template?style=social)
![GitHub forks](https://img.shields.io/github/forks/madhur-taneja/README-Template?style=social)

OHIHO is a german non profit organisation and we are doing research on helping the world with preventing pandemic
with our PWA tracing application. And of course it is fully opensource. 

Open and view the Project using the `.zip` file provided or at my [GitHub Repository]

The project is also hosted on [GitHub Pages]
## PWA
![alt text](https://github.com/ohioh/ohioh-app/blob/master/images/pwaimage.png)

A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.
Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications. Progressive Web Apps are a useful design pattern, though they aren't a formalized standard. PWA can be thought of as similar to AJAX or other similar patterns that encompass a set of application attributes, including use of specific web technologies and techniques. 
## BLE
![alt text](https://github.com/ohioh/ohioh-app/blob/master/images/ir_attachment_979.png)

BLE stands for Bluetooth Low Energy (Bluetooth LE, and marketed as Bluetooth Smart).
Bluetooth Low Energy is a form of wireless communication designed especially for short-range communication.  BLE is very similar to Wi-Fi in the sense that it allows devices to communicate with each other. However, BLE is meant for situations where battery life is preferred over high data transfer speeds. For example, say you want to broadcast marketing campaigns in the close proximity of a newly launched headphone. The amount of data you need to transfer to a visitor’s smartphone is extremely small, hence Bluetooth LE compatible beacons do the job quickly without draining the battery. 

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [How our OHIOH-APP works](#How-our-OHIOH-APP-works)
    - [Step 1: Install OHIOH android app](#Step-1:-Install-OHIOH-android-app)
    - [Step 2: Add our web page](#Step-2:-Add-our-web-page)
- [Running the App](#running-the-app)

- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

The project might have multiple branches: `master`, `Gui`  which are explained here

* `master` contains aggregate code of all branches
* `development` contains code under development of GUI.

Our project structure is given below:

```
	OHIOH-App
	├── README.md
	├── _manifest.json
	├── index-QR.html
	├── index-features.html
	├── index-research.html
	├── index.html
	├── newqr.html
	├── sw.js
	├── assets
	│   ├── favicon.png
	│   └── icons
	├── bootstrap
	│   ├── favicon.ico
	│   ├── index.html
	│   └── Bootstrap files
	├── components
	│   ├── favicon.ico
	│   ├── index.html
	│   └── Components of webpages
	├── fonts
	│   ├── favicon.ico
	│   ├── index.html
	│   └── Fonta files
	├── icons
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	├── js
	│   ├── Javascript files
	│   ├── index.html
	│   └── Javascript files
	├── pages
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	├── style
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	└── images
		├── App.css
		└── image files
```

## Tools Required

All tools required go here. You would require the following tools to develop and run the project:

* Smartphone with BLE support
* A web browser with BLE support
* Ohioh android ble simulator app

## Installation

All installation steps go here.

* Install our ohiho android app from here [OHIOH Android BLE]
  
* Go to our web app [OHIOH App]
   *As it is a pwa application you have to you can add this on your home screen
   *Then go to our homepage press the scan button if you just want search ble devices around you.
   *If want to contribute on our research , then go to research page and start scanning through scan button
   *In every choice you have to accept the bluetooth access of this app.

## Development

We have developed this PWA application with ble technology. And also we have developed a android simulator for sending data to our pwa app. Further more develooment information given below:

1. We hav edevelopped PWA application which will work in offline and will give notification of your nearby devices. We hav used browser api for accessing ble technology. Those api will help you to access and control ble service of smartphone.

2. We have also developped a android ble simulator [OHIOH Android BLE]. In this application we have used Generic Attribute Profile (GATT) protocol for ble communication. When it will advertise its device's information then it will send the uuid , manufacturer id and so on.

3. We also developed a qr code scanner and generator in our pwa application . You can scan any QR code with this scanner. And it will return all information regarding QR code. 

## How our OHIOH-APP works

### Step 1: Install OHIOH android app

* From [OHIOH Android BLE] you can install our android ble app .
  * Then press the start button , ble will start to advertise hise presence with information. 
  
### Step 2: Add our web page

* Go to our web page [OHIOH App]. Then you have to enable experimental ble permission. 
  * In our homepage there is there is scan button if press this button , then ble scan will start by its own. 
  * if you wan t take part of research then go to research page then press the scan button .
  * Every page has option of sending ble data. If you enable those option then this app will send your nearby devices information to our server.


thats it now you can use our app and can fight ot covid

## Running the App

If you run our application on research page then there will be a output list of nearby ble devices.

* Example output:
  ```
    Device name:
    Device id:
    uuid:
    TX power:
    RSSI
  
  ```



## Contributing

Now we are trying to sending ble data with pwa application instead of android app. But we are still doing research on it. 

We'd love to have your helping hand on this research and other contribution.  See [CONTRIBUTING.md] for more information on what we're looking for and how to get started.

## Versioning

If your project has multiple versions, include information about it here. 

For the available versions, see the [tags on this repository][tags]

## Authors

#### Tjark Zeim
* [GitHub]
* [LinkedIn]
#### Alam Al Saud
* [GitHub]
* [LinkedIn]
You can also see the complete [list of contributors][contributors] who participated in this project.



## Acknowledgments

This section can also be called as `Resources` or `References`


* Helpfull articles and documentation you can read
   ** https://developer.android.com/guide/topics/connectivity/bluetooth-le
   ** https://googlechrome.github.io/samples/web-bluetooth/
   ** https://web.dev/bluetooth/
   ** https://developer.chrome.com/apps/bluetoothLowEnergy
* Inspiration


[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/ohioh/ohioh-app
[OHIOH Android BLE]: https://github.com/ohioh/OHIOH-Bluetooth-AddOn/raw/master/APK/ohioh.apk
[GitHub Pages]: https://github.com/ohioh/ohioh-app/blob/master/README.md
[CONTRIBUTING.md]: https://github.com/ohioh/ohioh-app/blob/master/CONTRIBUTING.md
[tags]: https://github.com/ohioh/ohioh-app/blob/master/tags
[OHIOH App]: https://ohioh-app.netlify.app/
[GitHub]: https://github.com/ohioh/ohioh-app
[LinkedIn]: https://www.linkedin.com/in/madhur-taneja/

[contributors]: https://github.com/madhur-taneja/README-template/contributors
[license]: https://github.com/madhur-taneja/README-template/blob/master/LICENSE.md
