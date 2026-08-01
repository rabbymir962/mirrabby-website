/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Scroll Controller
Back To Top • Active Section • Scroll Progress
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE SCROLL
========================================= */

function initializeScroll() {

    initializeBackToTop();

    initializeScrollProgress();

    initializeActiveSections();

}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

function initializeBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", event => {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

function initializeScrollProgress() {

    const progress = document.querySelector(".scroll-progress");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

        const percentage = (scrollTop / pageHeight) * 100;

        progress.style.width = percentage + "%";

    });

}


/* =========================================
   ACTIVE SECTION
========================================= */

function initializeActiveSections() {

    const sections = document.querySelectorAll("section[id]");

    const links = document.querySelectorAll(".nav-menu a");

    if (!sections.length || !links.length) return;

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                currentSection = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================
   SCROLL POSITION
========================================= */

function getScrollPosition() {

    return {

        x: window.scrollX,

        y: window.scrollY

    };

}
