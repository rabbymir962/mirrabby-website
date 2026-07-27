/* ===================================================
   CHAPTER 11
   PREMIUM JAVASCRIPT FEATURES
=================================================== */


/* ===============================
   PAGE LOADER
================================ */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },800);

    }

});



/* ===============================
   SCROLL PROGRESS BAR
================================ */

window.addEventListener("scroll",()=>{


    const progressBar =
    document.getElementById("progress-bar");


    if(progressBar){


        let scrollTop =
        document.documentElement.scrollTop;


        let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


        let progress =
        (scrollTop / height) * 100;


        progressBar.style.width =
        progress + "%";


    }


});



/* ===============================
   MOBILE MENU
================================ */

const menuToggle =
document.querySelector(".menu-toggle");


const nav =
document.querySelector("nav");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


    nav.classList.toggle("active");


});


}



/* ===============================
   AUTO YEAR
================================ */

const year =
document.getElementById("year");


if(year){

    year.innerHTML =
    new Date().getFullYear();

}



/* ===============================
   ACTIVE NAV LINK
================================ */


const navLinks =
document.querySelectorAll("nav ul li a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});
/* ===================================================
   CHAPTER 12
   ADVANCED WEBSITE EFFECTS
=================================================== */


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements =
document.querySelectorAll(
".service-card, .portfolio-card, .info-box, .contact-card"
);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100){


            element.classList.add("slide-up");


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();



/* ===============================
   TYPING EFFECT
================================ */

const typingText =
document.querySelector(".typing");


if(typingText){


let text =
typingText.innerHTML;


typingText.innerHTML="";


let index=0;



function typing(){


    if(index < text.length){


        typingText.innerHTML +=
        text.charAt(index);


        index++;

        setTimeout(
        typing,
        100
        );


    }


}


typing();


}



/* ===============================
   BACK TO TOP BUTTON
================================ */

const topButton =
document.getElementById("backTop");



if(topButton){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        topButton.classList.add("show");


    }else{


        topButton.classList.remove("show");


    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}
