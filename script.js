/* ===================================================
   MIR RABBY OFFICIAL WEBSITE v5.0
   PREMIUM JAVASCRIPT
   FINAL FIXED VERSION
=================================================== */


/* ===================================================
   PAGE LOADER
=================================================== */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },800);

    }

});



/* ===================================================
   SCROLL PROGRESS BAR
=================================================== */


window.addEventListener("scroll",()=>{


    const progressBar =
    document.getElementById("progress-bar");


    if(progressBar){


        const scrollTop =
        window.scrollY;


        const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


        const progress =
        (scrollTop / documentHeight) * 100;


        progressBar.style.width =
        progress + "%";


    }


});



/* ===================================================
   MOBILE MENU
=================================================== */


const menuToggle =
document.querySelector(".menu-toggle");


const nav =
document.querySelector("nav");


if(menuToggle && nav){


    menuToggle.addEventListener("click",()=>{


        nav.classList.toggle("active");


        menuToggle.classList.toggle("open");


    });


}



/* Close Mobile Menu */

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(nav){

            nav.classList.remove("active");

        }


    });


});



/* Click Outside Close Menu */


document.addEventListener("click",(e)=>{


    if(

        nav &&
        menuToggle &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)

    ){

        nav.classList.remove("active");

    }


});



/* ===================================================
   HEADER SCROLL EFFECT
=================================================== */


const header =
document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 50){

            header.classList.add("scrolled");


        }else{


            header.classList.remove("scrolled");


        }


    }


});



/* ===================================================
   AUTO YEAR
=================================================== */


const year =
document.getElementById("year");


if(year){

    year.textContent =
    new Date().getFullYear();

}



/* ===================================================
   ACTIVE NAV LINK
=================================================== */


const sections =
document.querySelectorAll("section[id]");


const navItems =
document.querySelectorAll("nav ul li a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#"+current){


            link.classList.add("active");


        }


    });


});



/* ===================================================
   SCROLL REVEAL ANIMATION
=================================================== */


const revealElements =
document.querySelectorAll(`

.section-title,

.mission-card,

.org-card,

.rights-card,

.activity-card,

.news-card,

.gallery-item,

.video-card,

.info-item,

.contact-item

`);



function revealOnScroll(){


    revealElements.forEach(element=>{


        const top =
        element.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(top < windowHeight - 80){


            element.classList.add("slide-up");


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();



/* ===================================================
   TYPING EFFECT
=================================================== */


const typingText =
document.querySelector(".typing");



if(typingText){


    const text =
    typingText.textContent;


    typingText.textContent="";


    let index=0;



    function typeEffect(){


        if(index < text.length){


            typingText.textContent +=
            text.charAt(index);


            index++;


            setTimeout(
                typeEffect,
                100
            );


        }


    }


    typeEffect();


}



/* ===================================================
   BACK TO TOP BUTTON
=================================================== */


const backToTop =
document.getElementById("backToTop");



if(backToTop){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 400){


            backToTop.style.display="flex";


        }else{


            backToTop.style.display="none";


        }


    });



    backToTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}



/* ===================================================
   IMAGE LAZY LOADING SUPPORT
=================================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.setAttribute(
        "loading",
        "lazy"
    );


});



/* ===================================================
   CONTACT FORM DEMO
=================================================== */


const contactForm =
document.querySelector(".contact-form form");



if(contactForm){


    contactForm.addEventListener("submit",(e)=>{


        e.preventDefault();


        alert(
        "আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে। ধন্যবাদ।"
        );


        contactForm.reset();


    });


}



/* ===================================================
   PREVENT BROKEN LINKS
=================================================== */


document.querySelectorAll('a[href="#"]').forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


    });


});



/* ===================================================
   CONSOLE BRAND
=================================================== */


console.log(
`
=================================

 MIR RABBY OFFICIAL WEBSITE
 Premium Version v5.0

 Website Loaded Successfully

=================================
`
);
