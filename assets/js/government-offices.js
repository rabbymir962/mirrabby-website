/*
==========================================================
MIR RABBY HUMAN RIGHTS
Premium Government Portal JS
Version 2026
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuToggleBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("menuOverlay");

    /* =====================================
       Drawer Menu
    ===================================== */

    const openMenu = () => {

        if (!sideDrawer) return;

        sideDrawer.classList.add("active");
        overlay.classList.add("active");

        document.body.classList.add("drawer-open");

        menuBtn?.setAttribute("aria-expanded", "true");

    };

    const closeMenu = () => {

        if (!sideDrawer) return;

        sideDrawer.classList.remove("active");
        overlay.classList.remove("active");

        document.body.classList.remove("drawer-open");

        menuBtn?.setAttribute("aria-expanded", "false");

    };

    menuBtn?.addEventListener("click", openMenu);

    closeBtn?.addEventListener("click", closeMenu);

    overlay?.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

    document.querySelectorAll(".drawer-menu-list a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    /* =====================================
       Fade Animation
    ===================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .15
    });

    document.querySelectorAll(".content-card,.portrait-card").forEach(item => {

        item.classList.add("fade-element");

        observer.observe(item);

    });

    /* =====================================
       Contact Hover Effect
    ===================================== */

    document.querySelectorAll(".contact-item").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* =====================================
       Smooth Scroll
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

});
