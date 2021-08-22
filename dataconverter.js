dataInserida = '12/10/2021';

const myArr = dataInserida.split("/");
console.log(myArr);

dia = myArr[0];
ano = myArr[2];
//console.log(myArr[1])

let mes;

switch(myArr[1]){
    case '01':
        mes = 'janeiro';
        break;
    case '02':
        mes = 'fevereiro';
        break;
    case '03':
        mes = 'marco';
        break;
    case '04':
        mes = 'abril';
        break;
    case '05':
        mes = 'maio';
        break;
    case '06':
        mes = 'junho'
        break;
    case '07':
        mes = 'julho'
        break;
    case '08':
        mes = 'agosto'
        break;
    case '09':
        mes = 'setembro'
        break;
    case '10':
        mes = 'outubro'
        break;
    case '11':
        mes = 'novembro'
        break;
    case '12':
        mes = 'dezembro'
        break;
    default: 
        console.log('mes inválido')
}

console.log(`${dia} de ${mes} de ${ano}`)

