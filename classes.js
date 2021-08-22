class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }

    anunciar(){
        console.log(`Indicando o livro ${this.nome}`)
    }

    exibirQuantidadePaginas(){
        console.log(`Esse livro tem ${this.paginas} paginas`)
    }
}

const livro = new Livro("HP", "Celia Editora", 300)

console.log(livro)

livro.anunciar()
livro.exibirQuantidadePaginas()

const livro1984 = new Livro("1984", "Mari Editora", 500)

console.log(livro1984)
livro1984.anunciar()
livro1984.exibirQuantidadePaginas()