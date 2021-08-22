

// const livro = {
//     nome: 'Ceu',
//     editora: 'Celia editora',
//     paginas: 300,
//     anunciar: function(){
//         console.log(`O livro ${this.nome} tá a venda`)
//     }
// }

// console.log(livro.editora)
// livro.anunciar()

// function somar(num1, num2){
//     console.log(num1+num2)
// }

// somar(2,2)
// somar(3,2)

const livro = function(nome, editora, paginas){
    this.nome = nome, 
    this.editora = editora,
    this.paginas = paginas

    this.anunciar = function(){
        console.log (`O livro ${this.nome} tá a venda!`)
    }

}

const livroHP = new livro("HA", "CE", 300)

console.log(livroHP)
livroHP.anunciar()

