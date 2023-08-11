let solar = document.getElementById('solar-system');
document.getElementById('bompa-icon').addEventListener("mouseenter",function(){
    solar.style.animation = "aparecer 200ms linear forwards";
    solar.style.display='block';
})
document.getElementById('bompa-icon').addEventListener("mouseleave",function(){
     solar.style.animation = "desaparecer 200ms linear forwards";
 })