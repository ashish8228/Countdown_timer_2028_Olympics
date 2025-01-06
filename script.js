const count = document.getElementById("tim");


let countdown = function olympics(){
let date = new Date().getTime();
const olympics_date = new Date("July 21, 2028 00:00:00").getTime();
let new_date = olympics_date - date;

let days = Math.floor(new_date / (1000 * 60 * 60 * 24));
let hours = Math.floor((new_date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((new_date % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((new_date % (1000 * 60)) / 1000);

document.getElementById("tim").innerHTML = days + " days  " + hours + " hours  " +
minutes + " minutes  " + seconds + " seconds  ";
}


setInterval(countdown,1000)
