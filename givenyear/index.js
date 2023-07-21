
const givenYear = () => {
    const year = document.querySelector("#year").value;

    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ){
        console.log(`${year} is a given year`)
    }else{
        console.log(`${year} is not a given year`)
    }
    return false
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').onsubmit = givenYear;
});