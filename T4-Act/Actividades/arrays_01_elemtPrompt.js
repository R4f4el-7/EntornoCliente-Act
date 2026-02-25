//array estandar con prompt
const arr_num = [1,2,3,4,5];

let num_intro = prompt("Nuevo numero: ");

arr_num.push(Number(num_intro));

let cadena = ""
for (let i = 0; i < arr_num.length; i++) {
    let linea = `En la iteracion ${i} el elemento es ${arr_num[i]} \n`;
    cadena += linea;
}
alert(cadena);

//array de objetos con prompt
const arr_objetosLiteral = [
    {nombre:"Alonso", edad: 1},
    {nombre:"Alfredo", edad: 2},
    {nombre:"Gervasio", edad: 3}
]
let nombre_intro = prompt("Nuevo nombre: ");
let edad_intro = prompt("Nuevo edad: ");

if(nombre_intro !== "" && !isNaN(edad_intro)){
    let obje_intro = {nombre: nombre_intro, edad: Number(edad_intro)};

    arr_objetosLiteral.push(obje_intro)
}else{
    alert("Datos invalidos")
}

let cadena_2 = ""
for (let i = 0; i < arr_objetosLiteral.length; i++) {
    let linea = `En la iteracion ${i} el elemento tiene nombre: ${arr_objetosLiteral[i].nombre} y edad: ${arr_objetosLiteral[i].edad} \n`;
    cadena_2 += linea;
}
alert(cadena_2);