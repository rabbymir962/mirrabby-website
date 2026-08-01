/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Animation Controller
Scroll Reveal • Fade • Zoom • Slide
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE ANIMATION
========================================= */

function initializeAnimation() {

    initializeRevealAnimation();

    initializeHoverAnimation();

}


/* =========================================
   SCROLL REVEAL
========================================= */

function initializeRevealAnimation() {

    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15,

        rootMargin: "0px 0px -60px 0px"

    });

    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================
   HOVER EFFECT
========================================= */

function initializeHoverAnimation() {

    const hoverCards = document.querySelectorAll(

        ".hover-lift, .hover-scale"

    );

    hoverCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.willChange = "transform";

        });

        card.addEventListener("mouseleave", () => {

            card.style.willChange = "auto";

        });

    });

}


/* =========================================
   ADD ANIMATION
========================================= */

function addAnimation(element, className) {

    if (!element) return;

    element.classList.add(className);

}


/* =========================================
   REMOVE ANIMATION
========================================= */

function removeAnimation(element, className) {

    if (!element) return;

    element.classList.remove(className);

}


/* =========================================
   TOGGLE ANIMATION
========================================= */

function toggleAnimation(element, className) {

    if (!element) return;

    element.classList.toggle(className);

}


/* =========================================
   RESTART ANIMATION
========================================= */

function restartAnimation(element, className) {

    if (!element) return;

    element.classList.remove(className);

    void element.offsetWidth;

    element.classList.add(className);

}
/* =========================================
   STAGGER ANIMATION
========================================= */

function initializeStaggerAnimation() {

    const groups = document.querySelectorAll(".stagger");

    if (!groups.length) return;

    groups.forEach(group => {

        const children = group.children;

        [...children].forEach((item, index) => {

            item.style.transitionDelay =
                `${index * 100}ms`;

        });

    });

}


/* =========================================
   COUNTER ANIMATION TRIGGER
========================================= */

function initializeCounterAnimation() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                if (
                    typeof initializeCounter ===
                    "function"
                ) {

                    initializeCounter();

                }

                observer.disconnect();

            });

        },

        {

            threshold: 0.3

        }

    );

    observer.observe(counters[0]);

}


/* =========================================
   REDUCED MOTION SUPPORT
========================================= */

function initializeReducedMotion() {

    if (

        !window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        ).matches

    ) {

        return;

    }

    document.documentElement.classList.add(

        "reduced-motion"

    );

}
/* =========================================
   PAGE TRANSITION
========================================= */

function initializePageTransition() {

    document.body.classList.add("page-loaded");

}


/* =========================================
   OBSERVE NEW ELEMENTS
========================================= */

function observeNewElement(element) {

    if (!element) return;

    if (!element.classList.contains("reveal")) return;

    element.classList.add("active");

}


/* =========================================
   DESTROY ANIMATION
========================================= */

function destroyAnimation() {

    const elements = document.querySelectorAll(

        ".reveal"

    );

    elements.forEach(element => {

        element.classList.remove("active");

    });

}


/* =========================================
   REFRESH ANIMATION
========================================= */

function refreshAnimation() {

    destroyAnimation();

    initializeRevealAnimation();

}


/* =========================================
   END OF ANIMATION
========================================= */
