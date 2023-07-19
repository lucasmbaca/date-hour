const today = new Date();
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = today.getDay();
let hour = today.getHours();
let minutes = today.getMinutes();
let secounds = today.getSeconds();
let prepand = (hour >= 12)? "PM": "AM";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#fecha').innerHTML = `
    <p> Today is: ${daylist[day]} </p> 
    <p> Current time is: ${hour} ${prepand}:${minutes}:${secounds}</p>
    `
});