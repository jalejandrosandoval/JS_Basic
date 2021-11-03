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

let x = 2, y = 20, a = 10, b = 9, c = 99, d = 3, e = 12, f = 4, g = 2, h = 9, i = 28, j = 30;            
         
// Operadores de adición, sustracción, multiplicación, división, exponenciación y módulo:

console.group("Operadores de Asignación...");
    console.group("Operadores de Adición + :");
        console.log(`%c Significado (x = x + y) => ${x} = ${x} + ${y} : %c ${x+y}`, _style, _style1);
        console.log(`%c Abreviado (x += y) => ${x} += ${y} : %c ${x+=y}`, _style, _style1);
    console.groupEnd();
    console.group("Operadores de Sustracción - :");
        console.log(`%c Significado (a = a - b) => ${a} = ${a} - ${b} : %c${a-b}`, _style, _style1);
        console.log(`%c Abreviado (a -= b) => ${a} -= ${b} : %c ${a-=b}`, _style, _style1);
    console.groupEnd();
    console.group("Operadores de Multiplicación * :");
        console.log(`%c Significado (c = c * d) => ${c} = ${c} * ${d} : %c${c*d}`, _style, _style1);
        console.log(`%c Abreviado (c *= d) => ${c} *= ${d} : %c ${c*=d}`, _style, _style1);
    console.groupEnd();
    console.group("Operadores de División / :");
        console.log(`%c Significado (e = e / f) => ${e} = ${e} / ${f} : %c${e/f}`, _style, _style1);
        console.log(`%c Abreviado (e /= f) => ${e} /= ${f} : %c ${e/=f}`, _style, _style1);
    console.groupEnd();
    console.group("Operador de Exponenciación ** :");
        console.log(`%c Significado (g = g ** h) => ${g} = ${g} ** ${h} : %c${g**h}`, _style, _style1);
        console.log(`%c Abreviado (g **= h) => ${g} **= ${h} : %c ${g**=h}`, _style, _style1);
    console.groupEnd();
    console.group("Operadores de Módulo % :");
        console.log(`%c Significado (i = i % j) => ${i} = ${i} % ${j} : %c${i%j}`, _style, _style1);
        console.log(`%c Abreviado (i %= j) => ${i} %= ${j} : %c ${i%=j}`, _style, _style1);
    console.groupEnd();
 console.groupEnd();