//Declaração de variaveis

var x = 100;

function testScope(){
    var x = 50;
    // imprime variavel da função 
    console.log(x)

    if(true){
        var x = 30;
        // imprime variavel da função dentro da condição IF
        console.log(x)
    }
}

// Imprime variavel global
testScope()
console.log(x)