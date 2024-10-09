const theTimer=document.querySelector(".timer");


var timer=[0,0,0,0];




function runTimer(){
let currentTime= timer[0]+":"+timer[1]+":"+timer[2];

theTimer.innerHTML=currentTime;

timer[3]++;

timer[0]=Math.floor((timer[3]/100)/60);   //transfor to minute and gerd to 
timer[1]=Math.floor(timer[3]/100)-(timer[0]*60); /// transfet 60 second to 1 miniute
timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));



}


setInterval(runTimer,10);  //function is run ever 10 milisecond