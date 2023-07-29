let nav=document.querySelector("#nav");
let fullscreen=document.querySelector("#full-screen")


nav.addEventListener("mouseover",function(){
    fullscreen.style.top=0;
})
nav.addEventListener("mouseout",function(){
    fullscreen.style.top="-100%";
})
