class Pessoa {
    constructor(nome, idade, cnh){
        this.nome = nome,
        this.idade = idade,
        this.CNH = cnh
    }

    dirigir(){
        console.log(`Número da sua CNH é ${this.CNH}`)
    }

    dormir(){
        console.log(`${this.nome} é hora de dormir`)

    }

    comer (){
        console.log (`${this.nome} é hora de comer`)

    }

}

const pessoa = new Pessoa ("Celia" , 21 , "222.222.222.")

pessoa.dirigir()
pessoa.comer()
pessoa.dormir()