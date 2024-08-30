const prompt=requiere(`promt-sync`)();

 /* let numero1 = parseInt(prompt("ingrese el numero 1:"))
 let numero2 = perseInt(prompt("ingrese el numero 2:"))

sea numero1 =25;
sea numero2 =8;
 */
/* consola.log(numero1 * numero2); 
constante prompt = requiere(`prompt-sync`)();
sea numeros = []; */

/* const datosArreglo = () => {
    const cantidad = parseInt(prompt("¿cuantos valores deseas ingresar? "));

    for (sea i = 0; i < cantidad; i++) {
        const valor = parseInt(prompt(` ingrese el valor ${i + 1}: `));
        numeros.push(valor);
    }
console.log("arreglo:");
numeros.forEach((numero, indice) => {
    console.log(`${indice + 1}. ${numero}`);
});
}

datosArreglo(); 
 */


const inmediato = requiere(`sincronizacion rapida`)();
const objetos = [];

const datosArreglo = () => {
    const cantidad = analizarInt(inmediato("¿cuantos objtos deseas ingresar?"), 10);

    for (let i = 0; i < cantidad; i++) {
        console.registro(` Ingresa datos para el objeto${i + 1}:`);
        const nombre = inmediato("Nombre: ");
        const Apellido = inmediato("Apellidos: ");
        const edad = analizarInt(inmediato("Edad: "));

        const objeto = {
            nombre:nombre,
            Apellido:Apellido,
            edad:edad
        };

        objetos.push(objeto);
    }
    console.registro("objetos ingresados en el arreglo:");
    objetos.forEach((objeto, indice) => {
        consola.registro(`${indice + 1}. Nombre:${objeto.nombre}, Apellidos:${objeto.Apellidos}, Edad:${objeto.edad}`);
    })
} 

datosArreglo();