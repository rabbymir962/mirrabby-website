/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Contact Form Controller
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE CONTACT
========================================= */

function initializeContact() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", handleContactSubmit);

}


/* =========================================
   HANDLE SUBMIT
========================================= */

function handleContactSubmit(event) {

    event.preventDefault();

    const form = event.target;

    const name = form.querySelector("[name='name']");
    const email = form.querySelector("[name='email']");
    const subject = form.querySelector("[name='subject']");
    const message = form.querySelector("[name='message']");

    if (!validateForm(name, email, subject, message)) {

        return;

    }

    showMessage(
        "আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে।",
        "success"
    );

    form.reset();

}


/* =========================================
   VALIDATE FORM
========================================= */

function validateForm(name, email, subject, message) {

    if (!name.value.trim()) {

        showMessage("আপনার নাম লিখুন।", "error");

        name.focus();

        return false;

    }

    if (!isValidEmail(email.value)) {

        showMessage("সঠিক ইমেইল লিখুন।", "error");

        email.focus();

        return false;

    }

    if (!subject.value.trim()) {

        showMessage("বিষয় লিখুন।", "error");

        subject.focus();

        return false;

    }

    if (message.value.trim().length < 10) {

        showMessage(
            "কমপক্ষে ১০ অক্ষরের বার্তা লিখুন।",
            "error"
        );

        message.focus();

        return false;

    }

    return true;

}


/* =========================================
   EMAIL VALIDATION
========================================= */

function isValidEmail(email) {

    const pattern =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* =========================================
   MESSAGE
========================================= */

function showMessage(text, type) {

    const oldMessage = document.querySelector(".form-message");

    if (oldMessage) {

        oldMessage.remove();

    }

    const message = document.createElement("div");

    message.className = `form-message ${type}`;

    message.textContent = text;

    const form = document.querySelector(".contact-form");

    form.prepend(message);

    setTimeout(() => {

        message.remove();

    }, 4000);

}
/* =========================================
   REAL TIME VALIDATION
========================================= */

function initializeRealtimeValidation() {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(field => {

        field.addEventListener("input", () => {

            field.classList.remove("error");

        });

    });

}


/* =========================================
   LOADING BUTTON
========================================= */

function setSubmitLoading(isLoading) {

    const button = document.querySelector(
        ".contact-form button[type='submit']"
    );

    if (!button) return;

    if (isLoading) {

        button.disabled = true;

        button.dataset.original = button.textContent;

        button.textContent = "Sending...";

    } else {

        button.disabled = false;

        button.textContent =
            button.dataset.original || "Submit";

    }

}


/* =========================================
   CHARACTER COUNTER
========================================= */

function initializeCharacterCounter() {

    const textarea = document.querySelector(
        ".contact-form textarea[name='message']"
    );

    if (!textarea) return;

    const counter = document.createElement("small");

    counter.className = "message-counter";

    textarea.insertAdjacentElement(
        "afterend",
        counter
    );

    const updateCounter = () => {

        counter.textContent =
            `${textarea.value.length} Characters`;

    };

    updateCounter();

    textarea.addEventListener(
        "input",
        updateCounter
    );

}
