/*
==========================================================
SATHIA GOVERNMENT OFFICES
government-offices.js
Premium Government Portal
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ==========================================
       ELEMENTS
    ========================================== */

    const menuBtn = document.getElementById("menuToggleBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("menuOverlay");
    const header = document.querySelector(".main-header");

    /* ==========================================
       DRAWER MENU
    ========================================== */

    function openDrawer(){

        sideDrawer.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("drawer-open");

        menuBtn.setAttribute("aria-expanded","true");

    }

    function closeDrawer(){

        sideDrawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("drawer-open");

        menuBtn.setAttribute("aria-expanded","false");

    }

    if(menuBtn){

        menuBtn.addEventListener("click",openDrawer);

    }

    if(closeBtn){

        closeBtn.addEventListener("click",closeDrawer);

    }

    if(overlay){

        overlay.addEventListener("click",closeDrawer);

    }

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            closeDrawer();

        }

    });

    document.querySelectorAll(".drawer-menu-list a").forEach(link=>{

        link.addEventListener("click",()=>{

            closeDrawer();

        });

    });

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    function headerShadow(){

        if(window.scrollY>10){

            header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

        }else{

            header.style.boxShadow="none";

        }

    }

    window.addEventListener("scroll",headerShadow);

    headerShadow();

    /* ==========================================
       FADE ANIMATION
    ========================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(

        ".portrait-card,.content-card,.contact-item"

    ).forEach(item=>{

        item.classList.add("fade-element");

        observer.observe(item);

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

    /* ==========================================
       CARD HOVER EFFECT
    ========================================== */

    document.querySelectorAll(".content-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-6px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

    document.querySelectorAll(".contact-item").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-5px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

    /* ==========================================
       IMAGE HOVER
    ========================================== */

    const portrait=document.querySelector(".portrait-card img");

    if(portrait){

        portrait.addEventListener("mouseenter",()=>{

            portrait.style.transform="scale(1.04)";

        });

        portrait.addEventListener("mouseleave",()=>{

            portrait.style.transform="scale(1)";

        });

    }

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const current=window.location.pathname.split("/").pop();

    document.querySelectorAll(".drawer-menu-list a").forEach(link=>{

        const href=link.getAttribute("href");

        if(href && href.includes(current)){

            link.classList.add("active");

        }

    });

});
