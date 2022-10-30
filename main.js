let underLine = document.getElementById("underLine");
let Menu = document.querySelectorAll("nav a");

Menu.forEach((menu)=>menu.addEventListener("click", (e) => Indicator(e)));

function Indicator(e) {
    underLine.style.left = e.currentTarget.offsetLeft + "px"
    underLine.style.width = e.currentTarget.offsetWidth + "px"
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+ 2+ "px"

}