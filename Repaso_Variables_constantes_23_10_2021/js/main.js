'use strict';

// Evento para verificar toda la carga del HTML.
addEventListener("DOMContentLoaded", ()=>{
    console.log("Carga HTML OK!");
});

// Manejo de Variables -> Constantes

const Gen = "Masculino";
console.log("Const Género: " + Gen);

const GenObject = {}
GenObject.data = {
    nombre: "Masculino"
}
console.log("Data Género Objeto: " + JSON.stringify(GenObject));

const Gravedad = 9.807;
let Unidad = "m/s^2";
console.log(Gravedad, Unidad);

// Concatenación
console.log(Gravedad + " " + Unidad);
console.log(`"Comillas" 'comilla'`);

// Interpolarización
console.log(`Gravedad: ${Gravedad} ${Unidad}`);

// Mensajes en Consola
console.error(`Gravedad: ${Gravedad} ${Unidad}`);
console.warn(`Gravedad: ${Gravedad} ${Unidad}`);

// CSS en Mensajes
console.group("CSS Console");
console.log(`%cGravedad: ${Gravedad} ${Unidad}`,
            `font-family; color:white; 
             background:#162c40;
             padding: 3px;
             border-radius: 5px;
             font-weight: 700`);
console.groupEnd();

const Info = {
    Direccion: "27A 19-12",
    Ciudad: "Bucaramanga",
    Departamento: "Santander"
}
console.log(Info);