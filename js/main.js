/* ==========================================
   HRYET LUXURY EFFECTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background="rgba(0,0,0,.85)";
header.style.backdropFilter="blur(25px)";
header.style.boxShadow="0 0 30px rgba(138,46,255,.25)";

}else{

header.style.background="rgba(0,0,0,.45)";
header.style.backdropFilter="blur(15px)";
header.style.boxShadow="none";

}

});

/*==========================
SCROLL ANIMATION
==========================*/

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.15
});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s ease";

observer.observe(card);

});

/*==========================
HERO FLOAT
==========================*/

const hero=document.querySelector(".hero-card");

let angle=0;

setInterval(()=>{

angle+=0.01;

hero.style.transform=`
translateY(${Math.sin(angle)*10}px)
`;

},20);

/*==========================
BUTTON GLOW
==========================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px #8a2eff";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 20px rgba(138,46,255,.4)";

});

});

/*==========================
PARALLAX
==========================*/

window.addEventListener("scroll",()=>{

const y=window.scrollY;

document.querySelector(".hero-image").style.transform=

`translateY(${y*.15}px)`;

});

});