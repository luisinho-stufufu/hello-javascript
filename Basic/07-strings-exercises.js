/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let cadena = "Hola"
let msg1 = "Hola"
let msg2 = "y Adiós!"
let msg = msg1 + msg2
console.log(msg)

// 2. Muestra la longitud de una cadena de texto

console.log(msg.length)

// 3. Muestra el primer y último carácter de un string

console.log(msg[0])
console.log(msg[msg.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(msg.toUpperCase())
console.log(msg.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let myStr = `Hola
    esto
    es una
        cadena en varias
    líneas :)`
console.log(myStr)

// 6. Interpola el valor de una variable en un string

console.log(`La cadena ${msg} es el resultado de la concatenación de ${msg1} y ${msg2}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(msg.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(msg.includes("Hola"))

// 9. Comprueba si dos strings son iguales

console.log(cadena == msg1)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena.length == msg1.length)