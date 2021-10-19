// comece a criar a sua função add na linha abaixo

function add (numero1, numero2){
    let soma = numero1 + numero2 
    return soma
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(numero1, numero2) {
    let resultado = 0
    for (let contador = 0; contador < numero2; contador++) {
        resultado = add(resultado, numero1)
    }
    return resultado
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo

function power(x, exponen) {
    let resultado = 1
    for (let contador = 0; contador < exponen; contador++) {
        resultado = multiply(resultado, x)
    }
    return resultado
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo

function factorial(fatorial) {
    let resultado = 1
    for (let contador = fatorial; contador > 1; contador--) {
        resultado = multiply(resultado, contador)
    }
    return resultado
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

//Não consegui o bonus =(