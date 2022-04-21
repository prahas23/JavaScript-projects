let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let appendHours = document.getElementById('hours');
let appendMinutes = document.getElementById('minutes');
let appendSeconds = document.getElementById('seconds');
let appendMS = document.getElementById('ms');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let interval = null;

startButton.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

stopButton.onclick = () => {
    clearInterval(interval);
}

resetButton.onclick = () => {
    hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendMS.innerHTML = milliseconds;
}

let startTimer = () => {
    milliseconds++;

    if (milliseconds < 10) {
        appendMS.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 9) {
        appendMS.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendMS.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }

    if (minutes > 59) {
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
    }

    if (hours > 9) {
        appendHours.innerHTML = hours;
    }
}