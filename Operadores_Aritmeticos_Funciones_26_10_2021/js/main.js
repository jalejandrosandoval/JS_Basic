'use strict';

//Método de Suma
function Sum(params){
    let res = params.num1 + params.num2;
    console.log(`%c Resultado Suma: ${res}`, params.style);
}

//Método de Resta
function Subtraction(params){
    let res = params.num1 - params.num2;
    console.log(`%c Resultado Resta: ${res}`, params.style);
}

//Método de Multiplicación
function Multiplication(params){
    let res = params.num1 * params.num2;
    console.log(`%c Resultado Multiplicación: ${res}`, params.style);
}

//Método de División
function Division(params){
    let res = params.num1 / params.num2;
    console.log(`%c Resultado División: ${res}`, params.style);
}

let _num1 = 98;
let _num2 = 27;

let _style = `font-family; color:white; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

console.log(`%c El número 1: ${_num1}`, _style);
console.log(`%c El número 2: ${_num2}`, _style);

let params = 
{
    num1: _num1, 
    num2:_num2, 
    style: _style
}

console.group("Operadores Aritméticos...");
Sum(params);
Subtraction(params);
Multiplication(params);
Division(params);
console.groupEnd();

console.log(params);