function salarioAtulizado (salAtual){
    if(salAtual <= 280.00){
        salAtualizado = (salAtual + ((salAtual * 20)/100))
        console.log(`Salario anterior ${salAtual} , valor após reajuste ${salAtualizado}`)
     } else if (salAtual >= 280.00 && salAtual <= 700){
        salAtualizado = (salAtual + ((salAtual * 15)/100))
        console.log(`Salario anterior ${salAtual} , valor após reajuste ${salAtualizado}`)

     } else if (salAtual >= 700.00 && salAtual <= 1500.00){
        salAtualizado = (salAtual + ((salAtual * 10)/100))
        console.log(`Salario anterior ${salAtual} , valor após reajuste ${salAtualizado}`)

    } else if (salAtual >= 1500.00){
        salAtualizado = (salAtual + ((salAtual * 5)/100))
        console.log(`Salario anterior ${salAtual} , valor após reajuste ${salAtualizado}`)

     } else {
         console.log('Sem aumento..')
     }

    }


var salAtual1 = 800.00
salarioAtulizado(salAtual1)
