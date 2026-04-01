# 🏴‍☠️ PirateX - Steam Search Extension

![Version](https://img.shields.io/badge/Version-1.4-blue)
![Browser](https://img.shields.io/badge/Browser-Firefox-orange)
![License](https://img.shields.io/badge/License-MIT-green)

**PirateX** is a lightweight and elegant Firefox extension that natively integrates into the Steam store. It adds a custom dropdown menu right next to the purchase button, allowing you to quickly search for the game you are viewing on your favorite websites with a single click.

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

## 🚀 Manual Installation (Firefox)

Since this extension is an independent project, you can easily install it from this repository:

1. Download the source code by clicking **Code > Download ZIP**.
2. Extract the folder on your PC.
3. Open Firefox and type `about:debugging#/runtime/this-firefox` in the address bar.
4. Click the **Load Temporary Add-on...** button.
5. Locate the extracted folder, select the `manifest.json` file, and click Open.
6. You're done! Go to any game page on Steam and you'll see the PirateX button.

## 💻 Technologies Used
* **Vanilla JavaScript:** For injection logic and DOM manipulation.
* **CSS3:** Dynamically embedded styles.
* **Manifest V3:** The most modern and secure standard for web extensions.

---
*Developed with ☠️ for the community.*
