//Dos notaciones para arrays
let movimientos = ["e4","e5","d2"];//recomendada forma literal
let piezas = new Array("caballo","torre");

movimientos.forEach(movimiento => {console.log(movimiento);});
piezas.forEach(pieza => {console.log(pieza);});
//push(añadir ultimo elemento) y pop(eliminar ulñtimo elemento)
piezas.push("rey");
console.log(`Se añade la ultima pieza rey: ${piezas}`);
piezas.pop();
console.log(`Se elimina la ultima pieza: ${piezas}`);
//unshift(añadir primero) y unshift(eliminar ultimo)
movimientos.unshift("e7");
console.log(`Se añade el primer movimiento e7: ${movimientos}`);
movimientos.shift();
console.log(`Se elimina el primer movimiento e7: ${movimientos}`);

//clases y objeto literal equivalencia
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Buenos dias ${this.nombre} ${this.apellido}`);
    }
}
const persona = new Persona("Federico", "Carmonzo");
persona.saludar();

const perdona2 = {
    nombre:"Alfonso",
    apellido:"Torres",
    saludar() {
        console.log(`Buenos dias ${this.nombre} ${this.apellido}`);
    }
};
perdona2.saludar();

//array de objetos (persona)

const arr_persona_clase = [
    new Persona("nombre1", "Apellido1", 1),
    new Persona("nombre2", "Apellido2", 4),
    new Persona("nombre3", "Apellido3", 3),
    new Persona("nombre4", "Apellido4", 4),
];
console.log(arr_persona_clase);

const arr_persona_objLiteral = [
    {nombre:"nombre1", apellido:"apellido1", edad:1},
    {nombre:"nombre2", apellido:"apellido3", edad:2},
    {nombre:"nombre3", apellido:"apellido3", edad:3},
    {nombre:"nombre4", apellido:"apellido4", edad:4},
];

console.log(arr_persona_objLiteral);

//array de objetos filter/sort/map/reduce

const arr_persona_conteoEdad = arr_persona_clase
    .reduce((acc, p) => {
        if (acc[p.edad]){
            acc[p.edad] = acc[p.edad] + 1;
        }else{
            acc[p.edad] = 1
        }
        return acc;
    },{})

console.log(arr_persona_conteoEdad);

const arr_persona_edadDoble = arr_persona_clase.map(a => a.edad * 2);
console.log(arr_persona_edadDoble);

const arr_persona_sin1 = arr_persona_clase.filter(p => p.nombre !== "nombre1");
console.log(arr_persona_sin1);