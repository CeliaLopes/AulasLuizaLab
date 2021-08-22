let nome = ['Taina', 'Stellinha', 'Tequillina', 'Pituzinho', 'Celia']

for (let count = 0; count < nome.length; count++){
    console.log(`Nome: ${nome[count]} `)

}

nome.splice(2, 1)

console.log(`Nome: ${nome} `)