
const calculate = (e) => {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('lado1').value);
    const num2 = parseFloat(document.getElementById('lado2').value);
    const num3 = parseFloat(document.getElementById('lado3').value);

    let suma = (num1 + num2 + num3)/2
    let area =  Math.sqrt(suma*((suma-num1)*(suma-num2)*(suma-num3)));
    
    const li = document.createElement('li');
    li.innerHTML = `El area del calculo de los numeros ${num1} - ${num2} - ${num3} es: ${area}`;

    document.querySelector('#resultado').append(li);

    document.getElementById('lado1').value = '';
    document.getElementById('lado2').value = '';
    document.getElementById('lado3').value = '';
    document.querySelector('#submit').disabled = true;

    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.onkeyup = () => {
            const lado1 = document.querySelector("#lado1").value.trim();
            const lado2 = document.querySelector("#lado2").value.trim();
            const lado3 = document.querySelector("#lado3").value.trim();
            
            if(lado1.length && lado2.length && lado3.length > 0) {
                document.querySelector('#submit').disabled = false;
            } else {
                document.querySelector('#submit').disabled = true;
            };
        };
    });

    document.querySelector('form').onsubmit = calculate;  
});
