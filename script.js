// ===========================
// MIR RABBY OFFICIAL
// Premium Website v2.0
// ===========================

// Smooth fade animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Scroll To Top Button
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topBtn";
document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00ff99;
color:#000;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 5px 20px rgba(0,255,153,.4);
z-index:999;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Navbar shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Welcome Message
console.log("Welcome to MIR RABBY OFFICIAL Premium Website");/* ==========================================
   MIR RABBY Official Website
   script.js
========================================== */

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sticky Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8,17,31,.95)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.30)";
    } else {
        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.boxShadow = "none";
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "80px";
        menu.style.right = "20px";
        menu.style.background = "#08111f";
        menu.style.padding = "20px";
        menu.style.borderRadius = "12px";
        menu.style.width = "220px";
        menu.style.textAlign = "center";
        menu.style.gap = "20px";
        menu.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }

});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});

// Loading Animation
window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// Current Year
const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
"© " + year + " MIR RABBY. All Rights Reserved.";

}
