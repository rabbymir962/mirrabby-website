/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Premium Navbar
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE NAVBAR
========================================= */

function initializeNavbar() {

    setupStickyNavbar();

    setupMobileMenu();

    setupActiveNavigation();

    setupSmoothScroll();

}


/* =========================================
   STICKY NAVBAR
========================================= */

function setupStickyNavbar() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");

    const navigation = document.querySelector(".nav-menu");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}


/* =========================================
   ACTIVE MENU
========================================= */

function setupActiveNavigation() {

    const links = document.querySelectorAll(".nav-menu a");

    const currentPage = window.location.pathname;

    links.forEach(link => {

        if (currentPage.includes(link.getAttribute("href"))) {

            link.classList.add("active");

        }

    });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function setupSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

}
