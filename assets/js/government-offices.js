/* ==========================================================
   MIR RABBY HUMAN RIGHTS
   Government Offices Page JavaScript
   Drawer Menu Controller
========================================================== */


document.addEventListener("DOMContentLoaded", function(){


    const menuBtn = document.querySelector(".menu-btn");
    const drawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".drawer-overlay");
    const closeBtn = document.querySelector(".drawer-close");


    // যদি কোনো element না থাকে তাহলে error হবে না
    if(!menuBtn || !drawer || !overlay){
        return;
    }


    // Open Drawer
    function openDrawer(){

        drawer.classList.add("active");

        overlay.classList.add("active");

        document.body.classList.add("menu-open");

    }



    // Close Drawer
    function closeDrawer(){

        drawer.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    }



    // Menu Button Click

    menuBtn.addEventListener("click", function(){

        openDrawer();

    });



    // Close Button Click

    if(closeBtn){

        closeBtn.addEventListener("click", function(){

            closeDrawer();

        });

    }



    // Overlay Click

    overlay.addEventListener("click", function(){

        closeDrawer();

    });



    // ESC Key Support

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeDrawer();

        }

    });



    // Drawer Link Click করলে Close হবে

    const drawerLinks = drawer.querySelectorAll("a");


    drawerLinks.forEach(function(link){

        link.addEventListener("click", function(){

            closeDrawer();

        });

    });



    // Resize হলে Desktop এ Drawer বন্ধ

    window.addEventListener("resize", function(){

        if(window.innerWidth > 768){

            closeDrawer();

        }

    });



});
