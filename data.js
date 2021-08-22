dataConverter = '12/01/2012'

const array = dataConverter.split ("/")
console.log(array)

dia = array[0]
ano = array[2]
let mes 

switch (array[1]) {
    case '01':
        mes = 'janeiro'        
        break;
    case '02':
        mes = 'fevereiro'
        break;
    default:
        console.log('mes invalido')
        break;
}

console.log(`${dia} de ${mes} de ${ano}`)