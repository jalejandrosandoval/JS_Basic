'use strict';

// Arrays Asociativos

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _list = {};

// Function RemoveList
function RemoveList(_list) {
    let data = {};
    for (let id in Object.values(_list)) {
        if (_list[id] != undefined) {
            data[Object.keys(_list[id])[0]] = Object.values(_list[id])[0];
        }
    }
    return data;
}
for (let i = 0; i < 10; i++) {
    if (i <= 10) {
        _list[i] = Math.trunc(Math.random() * 100);
    } else {
        _list[`Identificador ${i}`] = Math.trunc(Math.random() * 100);
    }
}

let res = Object.entries(_list).map((valor, indice, array) => {
    let obj = {};
    if (valor[1] % 2 == 0) {
        obj[valor[0]] = `El dato es: ${valor[1]} Respuesta ${valor[1]} * ${2} = ${valor[1] * 2}`;
        return obj;
    }
});

console.group("Arrays Asociativos...");
    console.log(_list);
    console.log(RemoveList(res));
console.groupEnd();