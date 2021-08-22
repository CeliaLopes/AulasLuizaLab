var nota1, nota2;

nota1 = 10;
nota2 = 8;

media = (nota1 + nota2) / 2;

status = media >= 7 ? 'Aprovada' : 'Reprovada';
console.log(status)

if(media >= 7) {
    //executar se verdade
    status = 'Aprovada'
    console.log(`sua media foi ${media} e você está ${status}`);
}else if (media < 4) {
    //executar se falso
    status = 'Reprovada'
    console.log(`se lascou...`)
} else {
    console.log(`recuperação`)
}
