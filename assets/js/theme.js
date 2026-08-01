/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Theme Manager
Dark Mode • Light Mode • Auto Detection
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE THEME
========================================= */

function initializeTheme() {

    applySavedTheme();

    setupThemeToggle();

    watchSystemTheme();

}


/* =========================================
   APPLY SAVED THEME
========================================= */

function applySavedTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        enableDarkMode();

        return;

    }

    if (savedTheme === "light") {

        disableDarkMode();

        return;

    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        enableDarkMode();

    } else {

        disableDarkMode();

    }

}


/* =========================================
   THEME TOGGLE BUTTON
========================================= */

function setupThemeToggle() {

    const toggleButton = document.querySelector(".theme-toggle");

    if (!toggleButton) return;

    toggleButton.addEventListener("click", toggleTheme);

}


/* =========================================
   TOGGLE THEME
========================================= */

function toggleTheme() {

    if (document.body.classList.contains("dark-mode")) {

        disableDarkMode();

        localStorage.setItem("theme", "light");

    } else {

        enableDarkMode();

        localStorage.setItem("theme", "dark");

    }

}


/* =========================================
   ENABLE DARK MODE
========================================= */

function enableDarkMode() {

    document.body.classList.add("dark-mode");

}


/* =========================================
   DISABLE DARK MODE
========================================= */

function disableDarkMode() {

    document.body.classList.remove("dark-mode");

}


/* =========================================
   SYSTEM THEME CHANGE
========================================= */

function watchSystemTheme() {

    if (localStorage.getItem("theme")) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", event => {

        if (event.matches) {

            enableDarkMode();

        } else {

            disableDarkMode();

        }

    });

}
