/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Main Application File

Author : MIR RABBY
Website : MIR RABBY OFFICIAL

This file initializes all JavaScript modules.
=====================================================
*/

"use strict";

/* =========================================
   APP CONFIG
========================================= */

const App = {

    name: "MIR RABBY OFFICIAL",

    version: "2026 Edition",

    author: "MIR RABBY",

    initialized: false

};


/* =========================================
   DOCUMENT READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/* =========================================
   INITIALIZE WEBSITE
========================================= */

function initializeWebsite() {

    if (App.initialized) return;

    App.initialized = true;

    console.log(
        `%c${App.name} %c${App.version}`,
        "color:#0B5D3B;font-size:18px;font-weight:bold;",
        "color:#D90429;font-size:14px;font-weight:bold;"
    );

    initializeModules();

}


/* =========================================
   LOAD ALL MODULES
========================================= */

function initializeModules() {

    if (typeof initializeLoader === "function") {

        initializeLoader();

    }

    if (typeof initializeNavbar === "function") {

        initializeNavbar();

    }

    if (typeof initializeTheme === "function") {

        initializeTheme();

    }

    if (typeof initializeCounter === "function") {

        initializeCounter();

    }

    if (typeof initializeTyping === "function") {

        initializeTyping();

    }

    if (typeof initializeScroll === "function") {

        initializeScroll();

    }

    if (typeof initializeGallery === "function") {

        initializeGallery();

    }

    if (typeof initializePopup === "function") {

        initializePopup();

    }

    if (typeof initializeContact === "function") {

        initializeContact();

    }

    if (typeof initializeAnimation === "function") {

        initializeAnimation();

    }

    if (typeof initializeEmergency === "function") {

        initializeEmergency();

    }

    if (typeof initializeVisitor === "function") {

        initializeVisitor();

    }

    console.log("All modules loaded successfully.");

}


/* =========================================
   WINDOW LOAD
========================================= */

window.addEventListener("load", () => {

    console.log("Website fully loaded.");

});


/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener("resize", () => {

    // Future Responsive Features

});


/* =========================================
   WINDOW SCROLL
========================================= */

window.addEventListener("scroll", () => {

    // Future Global Scroll Features

});
