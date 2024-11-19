// Declaração das variaveis
var phrase ="JavaScript is fun!"
let counter = 0

// Loop para percorrer toda a frase e contar quantas letras A
for (let i = 0; i < phrase.length; i++){
    // Imprime a letra atual da frase
    console.log(phrase.charAt(i))
    
// Contador das letras A
    if (phrase.charAt(i) == "A" || phrase.charAt(i) == "a" ){
        counter = counter + 1

    }

    
}
// imprime quantas letras A possui
console.log("Possui", counter, "A")