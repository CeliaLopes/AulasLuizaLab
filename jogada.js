function jogar (j1,j2){
    if (j1 == 'pedra' && j2 == 'papel')
        console.log(`${j2} ganhou`)
    else if (j1 == 'papel' && j2 == 'pedra')
        console.log(`${j1} ganhou`)    
    else if (j1 == 'tesoura' && j2 == 'pedra')
        console.log(`${j2} ganhou`)
    else if (j1 == 'pedra' && j2 == 'tesoura')
        console.log(`${j1} ganhou`)
    else if (j1 == 'tesoura' && j2 == 'papel')
        console.log(`${j1} ganhou`)
    else if (j1 == 'papel' && j2 == 'tesoura')
        console.log(`${j2} ganhou`)
    else
        console.log('empate')
}

var jogador1 = 'papel'
var jogador2 = 'pedra'

jogar(jogador1, jogador2)