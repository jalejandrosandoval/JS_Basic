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