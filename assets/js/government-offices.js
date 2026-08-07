/*
==========================================================
SATHIA GOVERNMENT OFFICES
Premium Government Portal JS
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuToggleBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("menuOverlay");

    /* ===========================
       Drawer Menu
    =========================== */

    function openDrawer() {

        sideDrawer.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("drawer-open");

        menuBtn.setAttribute("aria-expanded","true");

    }

    function closeDrawer() {

        sideDrawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("drawer-open");

        menuBtn.setAttribute("aria-expanded","false");

    }

    menuBtn.addEventListener("click",openDrawer);

    closeBtn.addEventListener("click",closeDrawer);

    overlay.addEventListener("click",closeDrawer);

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeDrawer();

        }

    });

    document.querySelectorAll(".drawer-menu-list a").forEach(item=>{

        item.addEventListener("click",closeDrawer);

    });

    /* ===========================
       Scroll Animation
    =========================== */

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".portrait-card,.content-card,.contact-item"

    ).forEach(el=>{

        el.classList.add("fade-element");

        observer.observe(el);

    });

    /* ===========================
       Header Shadow
    =========================== */

    const header=document.querySelector(".main-header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>20){

            header.style.boxShadow="0 8px 30px rgba(0,0,0,.08)";

        }else{

            header.style.boxShadow="none";

        }

    });

    /* ===========================
       Card Hover
    =========================== */

    document.querySelectorAll(".content-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-6px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    document.querySelectorAll(".contact-item").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-5px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /* ===========================
       Smooth Anchor Scroll
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

});
