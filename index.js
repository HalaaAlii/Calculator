const textbox = document.getElementById("textbox");
const tofaren = document.getElementById("tofahran");
const tocel = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert (){
    if (tofaren.checked){
        temp = Number(textbox.value);
        temp = temp * 9 /  5 + 32;
        result.textContent = temp;
    }
    else if (tocel.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp;
    } else {
        result.textContent = "select a unit";
    }
}