const mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const dias = [31, 28, 31, 30, 31,30, 31, 31, 30, 31, 30, 31]

for (let count = 0; count < mes.length; count++){
    console.log(`O mes ${mes[count]} tem ${dias[count]} dias`)
}