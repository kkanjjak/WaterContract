let underLine = document.getElementById("underLine");
let Menu = document.querySelectorAll("nav a");

Menu.forEach((menu)=>menu.addEventListener("click", (e) => Indicator(e)));

function Indicator(e) {
    underLine.style.left = e.currentTarget.offsetLeft + "px"
    underLine.style.width = e.currentTarget.offsetWidth + "px"
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+ 2+ "px"

}

document.getElementById('AddNew').addEventListener("click",
function(){
var template = `<tr>
<td class="numberTD">
    <input type="text" class="number">
</td>
<td class="companyTD">
    <input type="text" class="company">
</td>

<td class="titleTD">
    <input type="text" class="title">
</td>
<td class="priceTD">
    <input type="text" class="price">
</td>
<td class="dateTD">
    <input type="text" class="date">
</td>
<td class="nameTD">
    <input type="text" class="name">
</td>
<td class="departmentTD">
    <input type="text" class="department">
</td>
</tr>`;
document.querySelector('tbody').insertAdjacentHTML('beforeend', template);
})
