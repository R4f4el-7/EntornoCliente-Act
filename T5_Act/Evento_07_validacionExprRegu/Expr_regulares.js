/*| Método      | Qué hace                                   | Ejemplo                              |
| ----------- | ------------------------------------------ | ------------------------------------ |
| `test()`    | Devuelve `true/false` si hay coincidencia  | `/abc/.test("abcd")` → true          |
| `match()`   | Devuelve coincidencias                     | `"abc".match(/a/)` → ["a"]           |
| `replace()` | Reemplaza coincidencias                    | `"abc".replace(/a/, "x")` → "xbc"    |
| `search()`  | Devuelve índice de la primera coincidencia | `"abc".search(/b/)` → 1              |
| `split()`   | Divide el texto por el patrón              | `"a,b,c".split(/,/)` → ["a","b","c"] |
*/
/*| Símbolo | Significado                               |
| ------- | ----------------------------------------- |
| `.`     | Cualquier carácter excepto salto de línea |
| `\d`    | Dígito `[0-9]`                            |
| `\D`    | No dígito                                 |
| `\w`    | Letra, número o guion bajo `[a-zA-Z0-9_]` |
| `\W`    | No letra ni número ni guion bajo          |
| `\s`    | Espacio en blanco (tab, espacio, salto)   |
| `\S`    | No espacio en blanco                      |
| `^`     | Inicio de cadena                          |
| `$`     | Final de cadena                           |
| `\b`    | Límite de palabra                         |
| `\B`    | No límite de palabra                      |
*/
//1.Validar que una cadena contiene solo letras minúsculas
/*Entrada: "hola" → true
Entrada: "Hola" → false*/
let regex = /[a-z]/
console.log("---1---")
console.log(regex.test("hola"))
console.log(regex.test("Hola"))
//2.Detectar si un texto contiene un número
regex = /\d/
console.log("---2---")
console.log(regex.test("a1a"))
console.log(regex.test("ab"))
//3.Validar que una cadena empieza con “a”
regex = /^a/
console.log("---3---")
console.log(regex.test("abc"))
console.log(regex.test("bc"))
//4.Validar que una cadena termina con “.jpg”
regex = /\.jpg$/
console.log("---4---")
console.log(regex.test("r.jpeg"))
console.log(regex.test("r.jpg"))
//5.Encontrar todas las vocales en un texto
regex = /[aeiou]/g
console.log("---5---")
console.log("Hola Mundo".match(regex));
/*| Bandera | Significado                               |
| ------- | ----------------------------------------- |
| **g**   | Búsqueda global (todas las coincidencias) |
| **i**   | Ignorar mayúsculas/minúsculas             |
| **m**   | Multilínea                                |
*/
//6. Validar un nombre (solo letras, mayúsculas o minúsculas)
regex = /^[a-zA-Z ]+$/
console.log("---6---")
console.log(regex.test("Juan perez"))
console.log(regex.test("Juan5"))
//7.Validar un código de 3 letras seguidas de 2 números
regex = /^[a-zA-Z]{3}[0-9]{2}$/
console.log("---7---")
console.log(regex.test("ABC12"))
console.log(regex.test("AB12"))
//8. Validar que un texto tenga entre 5 y 10 caracteres alfanuméricos
regex = /^\w{5,10}$/
console.log("---8---")
console.log(regex.test("ABC12"))
console.log(regex.test("AB12"))
//9. Detectar si un texto contiene una palabra prohibida
//Por ejemplo detectar "spam" dentro del texto.
regex = /spam/
console.log("---9---")
console.log(regex.test("Este mensaje contiene spam")); // true
console.log(regex.test("Este mensaje es normal"));     // false
//10. Extraer todos los números de un texto
regex = /[0-9]/g
console.log("---10---")
console.log("mens4j3 con 3".match(regex));
console.log("mensaje con 9".match(regex));
//11. Validar un email simple
regex = /^\w+@\w+\.com$/
console.log("---11---")
console.log(regex.test("user123@gmail.com"))
console.log(regex.test("user123@gmail.es"))
//12. Validar una contraseña
/*Debe cumplir:
    al menos 8 caracteres
    una mayúscula
    una minúscula
    un número*/
regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
//regex = /^(?=(.*[a-z]){2})(?=.*[A-Z])(?=.*[0-9]).{8,}$/ al menos 2 minusculas
console.log("---12---")
console.log(regex.test("Dominico1"))
console.log(regex.test("Dominico"))
//13. Validar una dirección IP v4 (Debe aceptar solo números de 0 a 255 separados por puntos.)
regex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
console.log("---13---")
console.log(regex.test("192.168.0.1"));
console.log(regex.test("256.111.0.2"));
//14. Validar un número de teléfono Formato: +34 600-111-222 Debe permitir: código país +NN espacio números separados por guiones
regex = /^\+[0-9]{2} \d{3}-\d{3}-\d{3}$/
console.log("---14---")
console.log(regex.test("+34 600-111-222"))
console.log(regex.test("+34 600-111-22"))
//15. Extraer todas las etiquetas HTML de un texto Salida: ["<div>", "<p>", "</p>", "</div>"]
const texto = "<div><p>Hola</p></div>";
regex = /<\/?[a-zA-Z][a-zA-Z0-9]*[^>]*>/g;
console.log("---15---")
console.log(texto.match(regex));
//16. Crea una regex que coincida con números del 100 al 999
regex = /^[1-9][0-9][0-9]$/;
console.log("---16---")
console.log(regex.test("100"))
console.log(regex.test("0100"))
console.log(regex.test("99"))
//17. Detecta si una contraseña contiene 3 letras seguidas
regex = /[A-Za-z]{3}/
console.log("---17---")
console.log(regex.test("abC123"))
//18. Valida una URL básica Ejemplo válido:
// "https://miweb.com"
regex = /^https:\/\/[A-Za-z0-9-]+\.com$/
console.log("---18---")
console.log(regex.test("https://miweb.com"))
//19. Detecta palabras que empiezan en vocal y terminan en consonante
regex = /\b[aeiou][a-zA-Z]*[^aeiou\b]\b/g
console.log("---19---")
console.log("auto ola casa cielo".match(regex));
//20. Encuentra todas las palabras de 4 letras exactas
// Usa \b.
regex = /\b[a-zA-Z]{4}\b/g
console.log("---20---")
console.log("auto ola casa cielo".match(regex));