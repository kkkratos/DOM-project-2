let changecolor= document.getElementById("change-color-btn")
let box=document.getElementById("color-box")

function Randomcolor(){
    box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}
changecolor.addEventListener("click" , Randomcolor)
document.addEventListener("click" , Randomcolor)
