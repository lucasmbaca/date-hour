document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = compareNumber;
});

const compareNumber = () => {
    const number = 13;
    const givenNumber = Number(document.querySelector("#number").value);
    const li = document.createElement('li');
    let result;
    
    if(givenNumber < number){
        result = number - givenNumber;
        li.innerHTML = `el resultado es la diferencia entre ${number} ${givenNumber} que es ${result}`
    }else if (givenNumber > number){
        result = (givenNumber - number)*2;
        li.innerHTML = `el resultado es el doble de la diferencia absoluta entre ${number} ${givenNumber} que es ${result}`
    };

    document.querySelector("#results").append(li);

    return false
}
