/*var operador = 100;
var operando = 50;

var resultado = operador * operando;
console.log(resultado);*/

/*var nome = "Celia";
var sobrenome = "Lopes";

var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);*/

/*var nome = 'Lopes'

if (nome === 'Celia'){
    console.log('Nome é este mesmo!!');
} else if (nome === 'Lopes') {
    console.log('Tudo bem! Também serve!!');
} else {
    console.log('Que pena não é seu nome!!!');
}*/

/*var nome = 'Los';

switch (nome) {
    case 'Celia':
        console.log('Legal!! Você é a Célia');
        break;
    case 'Lopes':
        console.log('Você também serve!!!');
        break;
    default: 
        console.log('Não é quem procurava!!');
        break;
    }

*/

/*
var numeroSorteado = 10;

var tabuada = 7

for(var i = 0; i < 10; i++){
    console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
}
*/

/*
var numeroSorteado = 10;

for (var i = 0; i < 100; i++ ){
    if (numeroSorteado === i){
        console.log('seu número foi encontrado!!')
        break;
    }
}
*/

var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou){
    possivelValor +=1;
    if (numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log(
            'Possível valor não corresponde ao numero sorteado ' + possivelValor
        );
    }
    
}








