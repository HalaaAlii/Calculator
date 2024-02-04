const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    if (count == 0){
        countLabel.textContent = 0;
    } else {
        count --;
        countLabel.textContent = count;
    }
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}