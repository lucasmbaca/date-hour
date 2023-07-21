const calculate = (operation) => {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);

    let result;

    if(operation === "multiply"){
        result = num1 * num2;
        console.log(result)
    }else if(operation === "divide"){
        result = num1 / num2;
        console.log(result)
    }

    const li = document.createElement('li')
    li.innerHTML = `The result is: ${result}`
    document.querySelector("#result").append(li);

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    
    return false
};


document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input');
    const buttons = document.querySelectorAll("button");

    //recorre cada boton y los desabilita.
    buttons.forEach(button => {
        button.disabled = true;
    })

    //recorre cada input de inputs seleccionados
    inputs.forEach(input => {  
        
        //usuario presionada una tecla en el input
        input.onkeyup = () => {
            const num1 = document.querySelector("#num1").value.trim();
            const num2 = document.querySelector("#num2").value.trim();
            
            //evalua si hay mas de un caracter dentro de los dos input
            if(num1.length && num2.length > 0){
                //si es asi los botones se activan
                buttons.forEach(button =>{
                   button.disabled = false; 
                })      
            }else{
                //sino permanecen bloqueados
                buttons.forEach(button =>{
                   button.disabled = true; 
                })  
            }
        } 
    })
    
    document.querySelector("#multiply").onclick = () => calculate("multiply"); 
    document.querySelector("#divide").onclick = () => calculate("divide");  
});