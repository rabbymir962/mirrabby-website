/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Premium Typing Animation
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE TYPING
========================================= */

function initializeTyping() {

    const typingElement = document.querySelector(".typing-text");

    if (!typingElement) return;

    const words = [

        "মানবাধিকার প্রতিষ্ঠায় আমরা প্রতিশ্রুতিবদ্ধ",

        "Human Rights",

        "Social Service",

        "Public Affairs",

        "Justice For Everyone",

        "MIR RABBY OFFICIAL"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    startTyping();

    function startTyping() {

        const currentWord = words[wordIndex];

        if (isDeleting) {

            typingElement.textContent = currentWord.substring(0, charIndex--);

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex++);

        }

        let typingSpeed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentWord.length + 1) {

            isDeleting = true;

            typingSpeed = 1800;

        }

        if (isDeleting && charIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            typingSpeed = 300;

        }

        setTimeout(startTyping, typingSpeed);

    }

}
/* =========================================
   START
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTyping();

});
