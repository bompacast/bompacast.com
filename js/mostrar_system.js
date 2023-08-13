let solar = document.getElementById('solar-system');
let logo = document.getElementById('bompa-icon');
document.getElementById('header-mid').addEventListener("mouseenter",function(){
    solar.style.animation = "aparecer 200ms linear forwards";
    solar.style.display='block';
    logo.style.animation = "dexpand 0.3s forwards"
})
document.getElementById('header-mid').addEventListener("mouseleave",function(){
     solar.style.animation = "desaparecer 200ms linear forwards";
     logo.style.animation = "expand 0.3s forwards"
 })