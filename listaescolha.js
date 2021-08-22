//console.log (`Lista: ${lista[i]}`)


let listaNomes = ['Taina', ' Stellinha', ' Tequillina', ' Pituzinho ', 'Celia']

function listagem(lista){
    for (let i = 1; i <= lista.length; i++){
        console.log(`Nome lista: ${i}. ${lista[i-1]}`)
    }

}

console.log(`Lista nomes: ${listaNomes}`)

console.log('Escolha um numero para ser excluído da lista: ')
let escolha = 2;

console.log(`Opção: ${escolha}`)

listaNomes.splice(escolha-1,1)

console.log(`Lista após a exclusão: `)

listagem(listaNomes)
