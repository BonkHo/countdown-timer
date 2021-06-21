/* 
Countdown Program
Keep track of number of hours (max: 24)
Keep track of number of minutes (max: 60)
Keep track of number of seconds (max: 60)
When seconds reaches 00, decrement minutes
When minutes reaches 00, decrement hours
Figure out how to have code count seconds
Have output in the format HH:MM:SS
Allow user input to change number of hr, min, and sec
Button to add custom amounts of time to hr, min, sec? 
*/

// Counts the number of seconds in the countdown
let seconds = 3600 * 12;

// Creates countdown variable that is linked to the ID "countdown" in html form
const countdownEl = document.getElementById("countdown");

// Makes updateCountdown loop every 1000 milliseconds (1 second)
updateCountdown();
let timerID = setInterval(updateCountdown, 1000);

// Function that we use to update the countdown by decrementing 1 second

function updateCountdown() {
    let hours = Math.floor(seconds / 3600);
    let minutesLeft = Math.floor(seconds - hours * 3600);
    let minutes = Math.floor(minutesLeft / 60);
    let secondsLeft = seconds % 60;

    console.log(hours);
    console.log(minutes);
    console.log(minutesLeft);
    console.log(seconds);
    console.log(secondsLeft);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    countdownEl.innerHTML = `${hours}:${minutes}:${secondsLeft}`;

    if (seconds < 1) {
        clearInterval(timerID);
    }
    seconds--;
}

function restartCountdown() {
    seconds = 0;
    clearInterval(timerID);
}

function addSeconds() {
    let addedSeconds = document.getElementById("add-seconds").value;
    let addedMinutes = document.getElementById("add-minutes").value;
    let addedHours = document.getElementById("add-hours").value;

    minutesToSeconds = addedMinutes * 60;
    hoursToSeconds = addedHours * 3600;

    seconds = addedSeconds + minutesToSeconds + hoursToSeconds;
    setInterval(updateCountdown, 1000);
}

function startCountdown() {
    setInterval(updateCountdown, 1000);
}
