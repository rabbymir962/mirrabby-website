// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.boxShadow = "none";
    }

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".animate").forEach((el)=>{

observer.observe(el);

});
