/*/Realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los datos
internos*/

let A=[[3,4,5,6],[7,8,9]];

const datosArreglo = () => {
    A.map((datos) => {
        datos.map((valores,i) => {
            console.log(`${i}=${valores}`);
        })
    });
}
datosAreglos();

//for of
let B = [[3,4,5,6],[7,8,9]];

for (let fil of B) {
    for (let [i, val] of fil.entries()) {
        console.log(`${i}=${val} `);
    };
}

//for in
let comparar = [[3,4,5,6],[7,8,9]];

for (let fil of comparar) {
    for (let [i, val] of fil.entries()) {
        console.log(`${i}=${val}`);
    }
}
const datosarreglo = (array) => {
    for (const datosindex in array) {
        for (const valoresindex in array[datosindex]){
            console.log(`${valoresindex}=${array[datosindex][valoresindex]}`);
        }
    }
}

datosarreglo(comparar);
//for each
let arreglointerno2dimensiones=[];

let arreglointerno2=[[3,4,5,6],[7,8,9]];

arreglointerno2dimensiones.forEach((arreglointerno2, index) => {
    console.log(`Datos ${index + 1}:`);
    arreglointerno2.forEach((elemento) => {
        console.log(elemento);
    });
});
//funcion flecha
let arregloi2 =[[3,4,5,6], [7,8,9]];

const leera3 = () => {
    arregloi2.forEach((subArreglo, index) => {
        console.log(`subarreglo ${index + 1}:`);
        subArreglo.forEach((elemento) => {
            console.log(elemento);
        });
    });
}

leera3();

//while
let b = [[1,2,3,4], [5,6,7,8]];

console.log("Cliclo while");

let i = 0;

while (i < b.length) {
    let v = b[i];
    let j = 0;

    while (j < v.length) {
        console.log(v[j]);
        j++;
    }
    1++;
}
//Estructura de control parser
let a=4;
let b=5;

function Decision(){

   /*  if(a>b){
        console.log(`La a es mayor ${a}`);
        
    }else{
        console.log(`La b es mayor ${b}`); 
    } */

       const comparar= a>b?"A es mayor":"b es mayor";
       console.log(comparar);
       
}

Decision();
//datosArreglo();