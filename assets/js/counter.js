/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Animated Counter
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE COUNTER
========================================= */

function initializeCounter() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================
   ANIMATE COUNTER
========================================= */

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    const duration = Number(counter.dataset.duration) || 2000;

    let start = 0;

    const startTime = performance.now();

    function update(currentTime) {

        const progress = Math.min((currentTime - startTime) / duration, 1);

        start = Math.floor(progress * target);

        counter.textContent = start.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            counter.textContent = target.toLocaleString();

        }

    }

    requestAnimationFrame(update);

}
