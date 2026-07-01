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
/* ==========================================
   HRYET PREMIUM EFFECTS V2
========================================== */

/* Cursor Glow */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* Floating Background */

for(let i=0;i<18;i++){

const particle=document.createElement("span");

particle.classList.add("particle");

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

5+Math.random()*10+"s";

particle.style.animationDelay=

Math.random()*6+"s";

document.body.appendChild(particle);

}


/* Hero Mouse Effect */

const heroCard=document.querySelector(".hero-card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

heroCard.style.transform=

`rotateY(${-x}deg)
rotateX(${y}deg)`;

});


/* Button Ripple */

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const size=Math.max(

button.clientWidth,

button.clientHeight

);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=

e.offsetX-size/2+"px";

circle.style.top=

e.offsetY-size/2+"px";

circle.classList.add("ripple");

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});


/* Loading Animation */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log("💜 HRYET Premium Loaded");