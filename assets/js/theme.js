/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Theme Manager
Light Theme Priority • Safe Theme Handler
=====================================================
*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
});

/* =========================================
   INITIALIZE THEME
========================================= */
function initializeTheme() {
    // Force clean light mode on initial load to prevent blue background issues
    disableDarkMode();
    
    // Set up toggle buttons if present in UI
    setupThemeToggle();
}

/* =========================================
   THEME TOGGLE BUTTON
========================================= */
function setupThemeToggle() {
    const toggleButtons = document.querySelectorAll(".theme-toggle, #theme-toggle");

    if (!toggleButtons.length) return;

    toggleButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            toggleTheme();
        });
    });
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
    document.body.setAttribute("data-theme", "dark");
}

/* =========================================
   DISABLE DARK MODE
========================================= */
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.body.setAttribute("data-theme", "light");
}

