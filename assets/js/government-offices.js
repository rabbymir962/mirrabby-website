/*
==========================================================
 MIR RABBY HUMAN RIGHTS
 Government Offices Drawer Menu JS
==========================================================
*/


document.addEventListener("DOMContentLoaded", function(){


    const menuBtn = document.getElementById("menuToggleBtn");

    const sideDrawer = document.getElementById("sideDrawer");

    const closeBtn = document.getElementById("closeBtn");

    const overlay = document.getElementById("menuOverlay");



    // Safety Check

    if(!menuBtn || !sideDrawer || !overlay){

        return;

    }



    // Open Menu

    function openMenu(){

        sideDrawer.classList.add("active");

        overlay.classList.add("active");

        document.body.classList.add("drawer-open");

    }



    // Close Menu

    function closeMenu(){

        sideDrawer.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("drawer-open");

    }



    // Menu Button

    menuBtn.addEventListener("click", function(){

        openMenu();

    });



    // Close Button

    if(closeBtn){

        closeBtn.addEventListener("click", function(){

            closeMenu();

        });

    }



    // Overlay Click

    overlay.addEventListener("click", function(){

        closeMenu();

    });



    // ESC Button

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeMenu();

        }

    });



    // Menu Item Click

    const menuLinks = document.querySelectorAll(".drawer-menu-list a");


    menuLinks.forEach(function(link){

        link.addEventListener("click", function(){

            closeMenu();

        });

    });



});
