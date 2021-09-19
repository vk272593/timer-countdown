const startingMinutes = 15;
let time = startingMinutes*60;
const countdownE1 = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds<10?'0'+seconds:seconds;
    countdownE1.innerHTML=`${minutes}:${seconds}`;
    time--;
}