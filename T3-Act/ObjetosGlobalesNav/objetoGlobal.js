//Objeto global
console.log(window.document)
console.log(window.innerWidth)

//alert equivalentes
// alert("Hola1")
// window.alert("Hola2")

console.log(window.screenX)
console.log(window.screenY)
//location.href = "https://www.chess.com"
console.log(window.location.href)

//NAVIGATOR
console.log(navigator.userAgent)
console.log(navigator.language)
if(navigator.language.startsWith("es")){
    console.log("Estas en el español")
}
console.log(navigator.onLine)
