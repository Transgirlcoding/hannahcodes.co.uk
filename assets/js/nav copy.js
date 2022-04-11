const hamburger = document.querySelector(".blog_hamburger");
const navLinks = document.querySelector(".blog_nav-links");
const links = document.querySelectorAll(".blog_nav-links .blog_nav_li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
