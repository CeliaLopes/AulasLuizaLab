class BombaCombustivel {
    //atributos
    constructor(valorGasolina, capacidade){
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdeGasolina = capacidade
    }

    //metodos

    encherBomba(){
        if(this.qtdeGasolina == this.capacidade){
            console.log('A bomba ta full')
        } else {
            this.qtdeGasolina = this.capacidade
            console.log('Enchendo a bomba...')
        }

    }

    abastecerCarro(litros){
        if (this.qtdeGasolina >= litros){
            this.qtdeGasolina -= litros
            console.log(`Abastecido com sucesso e vc vai pagar ${litros* this.valorGasolina}`)

        } else {
            console.log(`não temos essa qtdade de gasolina. Só temos ${this.qtdeGasolina}`)
        }
    }

    ajustarValor(novoValor){
    if(novoValor > 0 ){//&& typeof(novoValor) === Number){
        this.valorGasolina = novoValor;
    }else{
        console.log("Vai liberar de graça!!")
    }

    }

}

const bomba1 = new BombaCombustivel(10, 50)
bomba1.abastecerCarro(20)
 bomba1.ajustarValor(15)
 bomba1.abastecerCarro(20)
 bomba1.abastecerCarro(20)
 bomba1.encherBomba()