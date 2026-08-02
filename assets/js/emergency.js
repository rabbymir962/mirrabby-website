/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Emergency Services Controller
Bangladesh Emergency Support
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE EMERGENCY
========================================= */

function initializeEmergency() {

    initializeEmergencyCall();

    initializeCopyNumber();

}


/* =========================================
   CALL BUTTON
========================================= */

function initializeEmergencyCall() {

    const buttons = document.querySelectorAll("[data-call]");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const number = this.dataset.call;

            if (!number) return;

            const confirmCall = confirm(

                `আপনি কি ${number} নম্বরে কল করতে চান?`

            );

            if (confirmCall) {

                window.location.href = `tel:${number}`;

            }

        });

    });

}


/* =========================================
   COPY NUMBER
========================================= */

function initializeCopyNumber() {

    const buttons = document.querySelectorAll("[data-copy]");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", async function () {

            const number = this.dataset.copy;

            if (!number) return;

            try {

                await navigator.clipboard.writeText(number);

                showEmergencyMessage("নম্বর কপি হয়েছে।");

            }

            catch (error) {

                console.error(error);

                showEmergencyMessage("কপি করা যায়নি।");

            }

        });

    });

}


/* =========================================
   MESSAGE
========================================= */

function showEmergencyMessage(text) {

    let message = document.querySelector(".emergency-message");

    if (!message) {

        message = document.createElement("div");

        message.className = "emergency-message";

        document.body.appendChild(message);

    }

    message.textContent = text;

    message.classList.add("show");

    setTimeout(() => {

        message.classList.remove("show");

    }, 2500);

}


/* =========================================
   MOBILE CHECK
========================================= */

function isMobileDevice() {

    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(

        navigator.userAgent

    );

}
