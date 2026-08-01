/*
=====================================================
MIR RABBY OFFICIAL
Version 2026 Edition

Visitor Manager
Visitor Counter • Last Visit • First Visit
=====================================================
*/

"use strict";

/* =========================================
   INITIALIZE VISITOR
========================================= */

function initializeVisitor() {

    updateVisitorCounter();

    saveVisitTime();

    displayVisitorInfo();

}


/* =========================================
   UPDATE VISITOR COUNTER
========================================= */

function updateVisitorCounter() {

    let totalVisits = Number(

        localStorage.getItem("mr_total_visits")

    ) || 0;

    totalVisits++;

    localStorage.setItem(

        "mr_total_visits",

        totalVisits

    );

}


/* =========================================
   SAVE VISIT TIME
========================================= */

function saveVisitTime() {

    const now = new Date().toLocaleString();

    if (!localStorage.getItem("mr_first_visit")) {

        localStorage.setItem(

            "mr_first_visit",

            now

        );

    }

    localStorage.setItem(

        "mr_last_visit",

        now

    );

}


/* =========================================
   DISPLAY VISITOR INFO
========================================= */

function displayVisitorInfo() {

    const totalElement =

        document.querySelector(".visitor-count");

    const firstElement =

        document.querySelector(".first-visit");

    const lastElement =

        document.querySelector(".last-visit");

    if (totalElement) {

        totalElement.textContent =

        localStorage.getItem("mr_total_visits") || "1";

    }

    if (firstElement) {

        firstElement.textContent =

        localStorage.getItem("mr_first_visit") || "-";

    }

    if (lastElement) {

        lastElement.textContent =

        localStorage.getItem("mr_last_visit") || "-";

    }

}


/* =========================================
   RESET VISITOR DATA
========================================= */

function resetVisitorData() {

    localStorage.removeItem("mr_total_visits");

    localStorage.removeItem("mr_first_visit");

    localStorage.removeItem("mr_last_visit");

}


/* =========================================
   FUTURE ANALYTICS
========================================= */

function initializeAnalytics() {

    // Google Analytics (Future)

    // Cloudflare Analytics (Future)

    // Visitor API (Future)

}
