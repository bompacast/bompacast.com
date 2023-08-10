document.getElementById('bompa-icon').addEventListener("mouseenter",function(){
    console.log("oi")
    document.getElementById('solar-system').style.animation = "aparecer 200ms linear forwards";
})
document.getElementById('bompa-icon').addEventListener("mouseleave",function(){
    console.log("tcau")
     document.getElementById("solar-system").style.animation = "desaparecer 200ms linear forwards";
 })