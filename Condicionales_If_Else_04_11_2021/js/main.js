'use strict';

// Operadores Condicionales IF - Else...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let num1 = parseInt(prompt(`Ingrese un número:`, `3`));

console.group("Operadores Condicionales IF - Else Normales...");
    if(num1 >=5 && num1 <=10 || num1 ==2)
        console.log(`%c El número está dentro del rango de 5-10`, _style);
    else
        console.log(`%c El número no cumple la condición...`, _style);
console.groupEnd();


let num2 = parseInt(prompt(`Ingrese un número:`, `22`));

console.group("Operadores Condicionales IF - Else en Cascada...");
    if(num2 >=5 && num2 <=10)
        console.log(`%c El número está dentro del rango de 5-10: ${num2}`, _style);
    else if(num2>= 15 && num2 <=20)
        console.log(`%c El número está dentro del rango de 15-20: ${num2}`, _style);
    else if(num2 >= 25 && num2 <=30)
        console.log(`%c El número está dentro del rango de 25-30: ${num2}`, _style);
    else
        console.log(`%c La condición no se cumple :(`, _style);    
console.groupEnd();

function message(){
    console.warn(":)");
    return "function";
}

let res = (true) ? message() : 
            (false) ? [":p"] : [":("];
console.group("Operadores Condicionales IF - Else Cortos...");
    console.warn(res);
console.groupEnd();