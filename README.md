# 🏴‍☠️ PirateX - Steam Search

![Version](https://img.shields.io/badge/Version-1.4-blue)
![Platform](https://img.shields.io/badge/Platform-Chrome%20%7C%20Firefox%20%7C%20Edge-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**PirateX** is a lightweight and elegant extension/userscript that natively integrates into the Steam store. It adds a custom dropdown menu right next to the purchase button, allowing you to quickly search for the game you are viewing on your favorite websites with a single click.

---

## ✨ Key Features

* 🎨 **Native Design:** The button is designed with pure CSS to perfectly mimic the original Steam style (green gradients, 3D shadows, and hover animations).
* ⚡ **Smart Injection:** Uses `MutationObserver` to load the button the exact millisecond the page is ready, without annoying delays.
* 🎯 **Precise Search:** Cleans the game name (removing symbols like ® or ™) and generates dynamic URLs (standard or *slug* format) tailored to each website.
* 🛡️ **Total Privacy:** Requires no invasive permissions, uses no trackers, and features a `data_collection: none` policy. 100% clean code.

## 🛠️ Currently Supported Sites

The dropdown menu includes quick search links for:
* Skidrow & Reloaded
* Rexagames
* Ankergames
* Astral Games
* GoG Games

---

## 🚀 Installation

### Method 1: The Easy Way (UserScript) 🌟
The fastest way to install PirateX on **Chrome, Firefox, Opera, or Edge** is by using a UserScript manager.

1. Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. **[CLICK HERE TO INSTALL PIRATEX](piratex.user.js)** 3. Your script manager will pop up automatically. Click **Confirm Installation**.
4. You're done! Go to any game page on Steam and enjoy. 🏴‍☠️

### Method 2: Manual Installation (Firefox Extension)
Since this extension is an independent project, you can easily install it locally:

1. Download the `.xpi` file from the **[Releases](https://github.com/TU-USUARIO/PirateX/releases)** section.
2. Open your Firefox browser.
3. Drag and drop the `.xpi` file directly into any open Firefox window.
4. Click "Add" when the installation prompt appears.

*Alternatively, you can load it temporarily:*
1. Download the source code by clicking **Code > Download ZIP**.
2. Extract the folder on your PC.
3. Open Firefox and type `about:debugging#/runtime/this-firefox` in the address bar.
4. Click the **Load Temporary Add-on...** button and select the `manifest.json` file.

---

## 💻 Technologies Used
* **Vanilla JavaScript:** For injection logic and DOM manipulation.
* **CSS3:** Dynamically embedded styles.
* **Manifest V3:** The most modern and secure standard for web extensions.

---
*Developed with ☠️ for the community.*
