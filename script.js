const theTimer = document.querySelector(".timer");
const checkArea = document.querySelector("#test-area");

const originText = document.querySelector("#origin-text p").innerHTML;
const testWrappercolor = document.querySelector(".test-wrapper");

const resetButton = document.querySelector("#reset");


var timer = [0, 0, 0, 0];
var flagCheckwrite = false;
var Intervalflag = null;
let textCurrent = "";
let textCrentLent = 0;

function leadingZero(time) {

    if (time < 9) {
        time = "0" + time;
    }
    return time;


}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);   //transfor to minute and gerd to 
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60); /// transfet 60 second to 1 miniute
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));



}
//setInterval(runTimer, 10);


function checkSentence() {
    textCurrent = checkArea.value;
    textCrentLent = textCurrent.length;
    let orientTextCurent = originText.substring(0, textCrentLent);

    if (originText == textCurrent) {
        testWrappercolor.style.borderColor = "green";
        clearInterval(Intervalflag);
    }
    else if (orientTextCurent == textCurrent) {
        testWrappercolor.style.borderColor = "yellow";
    }
    else {
        testWrappercolor.style.borderColor = "red";
    }

}

function Start() {
    textCrentLent = checkArea.value.length;

    if (textCrentLent == 0) {
        timer = [0, 0, 0, 0];
        flagCheckwrite = false;
        clearInterval(Intervalflag);
        Intervalflag = null;
        checkArea.value = "";

        theTimer.innerHTML = "00:00:00";
        testWrappercolor.style.borderColor = "grey";

    }
    if (flagCheckwrite == false) {

        Intervalflag = setInterval(runTimer, 10);  //function is run ever 10 milisecond
        flagCheckwrite = true;
    }
}


function restarBut() {

    timer = [0, 0, 0, 0];
    flagCheckwrite = false;
    clearInterval(Intervalflag);
    checkArea.value = "";

    Intervalflag = null;
    theTimer.innerHTML = "00:00:00";
    testWrappercolor.style.borderColor = "grey";
}


checkArea.addEventListener("keypress", Start)

checkArea.addEventListener("keyup", checkSentence)
resetButton.addEventListener("click", restarBut)
