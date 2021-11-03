'use strict';

let _style = `font-family; color:white; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _style1 = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _style2 = `font-family; color:#007bff; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _style3 = `font-family; color:#dc3545; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let num1= 28;
let num2= 27;

console.group("Data :v");
console.log(`Data 1: ${num1} DataType 1: ${typeof(num1)}`);
console.log(`Data 2: ${num2} DataType 1: ${typeof(num2)}`);
console.groupEnd();

console.group("Operadores ---->");
console.log(`%c Operadores de Igualdad : %c(${num1} == ${num2}) => %c${num1 == num2}`, _style, _style1, num1 == num2 ? _style2: _style3);
console.log(`%c Operador de Mayor: %c(${num1} > ${num2}) => %c${num1 > num2} `, _style, _style1, _style2);
console.log(`%c Operador de Menor: %c(${num1} < ${num2}) => %c${num1 < num2} `, _style, _style1, _style2);
console.log(`%c Operador de MayorIgual: %c(${num1} >= ${num2}) => %c${num1 >= num2} `, _style, _style1, _style2);
console.log(`%c Operador de MenorIgual: %c(${num1} <= ${num2}) => %c${num1 <= num2} `, _style, _style1, _style2);
console.groupEnd();

// Evento para verificar toda la carga del HTML.
addEventListener("DOMContentLoaded", ()=>{
    let num3 = prompt("Digite un número 3:");
    let num4 = prompt("Digite un número 4:");

    console.group("Operadores Prompt ---->");
    console.log(`%c Operadores de Igualad : %c(${num3} == ${num4}) => %c${num3 == num4}`, _style, _style1, num3 == num4 ? _style2: _style3);
    console.groupEnd();
});