/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Premium Page Loader
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE LOADER
========================================= */

function initializeLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        hideLoader(loader);

    });

}


/* =========================================
   HIDE LOADER
========================================= */

function hideLoader(loader) {

    loader.classList.add("loader-hide");

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

}


/* =========================================
   SHOW LOADER
========================================= */

function showLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.display = "flex";

    requestAnimationFrame(() => {

        loader.classList.remove("loader-hide");

    });

}


/* =========================================
   PAGE TRANSITION
========================================= */

function startPageTransition(url) {

    const loader = document.getElementById("loader");

    if (!loader) {

        window.location.href = url;

        return;

    }

    showLoader();

    setTimeout(() => {

        window.location.href = url;

    }, 400);

}


/* =========================================
   AUTO LINK TRANSITION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a[data-transition]");

    links.forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            if (!href || href.startsWith("#")) return;

            event.preventDefault();

            startPageTransition(href);

        });

    });

});
