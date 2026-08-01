/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Gallery Manager
Photo Gallery • Video Gallery
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE GALLERY
========================================= */

function initializeGallery() {

    initializeGalleryFilter();

    initializeGalleryPopup();

    initializeLazyImages();

}


/* =========================================
   GALLERY FILTER
========================================= */

function initializeGalleryFilter() {

    const filterButtons = document.querySelectorAll(".gallery-filter button");

    const galleryItems = document.querySelectorAll(".gallery-item");

    if (!filterButtons.length || !galleryItems.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            galleryItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.dataset.category === filter
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}


/* =========================================
   GALLERY POPUP
========================================= */

function initializeGalleryPopup() {

    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const image = item.querySelector("img");

            if (!image) return;

            if (typeof openPopup === "function") {

                openPopup(image.src, image.alt);

            }

        });

    });

}


/* =========================================
   LAZY LOADING
========================================= */

function initializeLazyImages() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.dataset.src;

            image.removeAttribute("data-src");

            observer.unobserve(image);

        });

    });

    images.forEach(image => {

        observer.observe(image);

    });

}
