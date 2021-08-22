var pizza = ['frango', 'carne', 'vegana']
var numeros = [1, 2, 3, 4, 5]

console.log(numeros.length)

numeros.push(123)
console.log(numeros)

numeros.pop()
console.log(numeros)
numeros.pop()
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.shift()
console.log(numeros)

//colocar no meio indice / 0 para não remover / valor a inserir
numeros.splice(2, 0, 5)
console.log(numeros)
numeros.splice(2, 1)
console.log(numeros)

console.log(numeros.indexOf(3))
console.log(numeros.join(","))
console.log(numeros.reverse())
//console.log(numeros.)

var lista = [0, 1, 10, 11, 100, 101, 111, 1000];

for (var i = 0; i < lista.length; i++){
    console.log(`no indice ${i} o valor é ${lista[i]}`)
}

