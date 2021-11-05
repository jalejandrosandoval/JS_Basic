'use strict';

// Operadores Lógicos...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;
            
let Auto = false, Bus = true;

console.group("Operadores Lógicos...");
    console.log(`%c ${Auto && Bus}`, _style);
console.groupEnd();