/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Premium Popup System
Image • Video • Gallery
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE POPUP
========================================= */

function initializePopup() {

    createPopup();

    registerPopupEvents();

}


/* =========================================
   CREATE POPUP
========================================= */

function createPopup() {

    if (document.getElementById("popup-overlay")) return;

    const popup = document.createElement("div");

    popup.id = "popup-overlay";

    popup.className = "popup-overlay";

    popup.innerHTML = `
        <div class="popup-container">

            <button class="popup-close" aria-label="Close Popup">
                &times;
            </button>

            <img
                id="popup-image"
                class="popup-image"
                src=""
                alt="Gallery Image"
            >

            <video
                id="popup-video"
                class="popup-video"
                controls
                style="display:none;"
            ></video>

            <p id="popup-caption" class="popup-caption"></p>

        </div>
    `;

    document.body.appendChild(popup);

}


/* =========================================
   OPEN IMAGE POPUP
========================================= */

function openPopup(imageSrc, caption = "") {

    const overlay = document.getElementById("popup-overlay");

    const image = document.getElementById("popup-image");

    const video = document.getElementById("popup-video");

    const text = document.getElementById("popup-caption");

    if (!overlay || !image || !video || !text) return;

    video.pause();

    video.style.display = "none";

    image.style.display = "block";

    image.src = imageSrc;

    text.textContent = caption;

    overlay.classList.add("active");

}


/* =========================================
   OPEN VIDEO POPUP
========================================= */

function openVideoPopup(videoSrc, caption = "") {

    const overlay = document.getElementById("popup-overlay");

    const image = document.getElementById("popup-image");

    const video = document.getElementById("popup-video");

    const text = document.getElementById("popup-caption");

    if (!overlay || !image || !video || !text) return;

    image.style.display = "none";

    video.style.display = "block";

    video.src = videoSrc;

    video.load();

    video.play();

    text.textContent = caption;

    overlay.classList.add("active");

}


/* =========================================
   CLOSE POPUP
========================================= */

function closePopup() {

    const overlay = document.getElementById("popup-overlay");

    const video = document.getElementById("popup-video");

    if (!overlay) return;

    overlay.classList.remove("active");

    if (video) {

        video.pause();

        video.currentTime = 0;

    }

}


/* =========================================
   EVENTS
========================================= */

function registerPopupEvents() {

    document.addEventListener("click", event => {

        if (event.target.matches(".popup-close")) {

            closePopup();

        }

        if (event.target.id === "popup-overlay") {

            closePopup();

        }

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closePopup();

        }

    });

}
