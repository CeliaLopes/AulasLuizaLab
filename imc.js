var peso, altura;

peso = 55;
altura = 1.65;
var imc = peso / (altura^2);

if (imc < 19.1){
    console.log(`abaixo do peso, seu IMC é ${imc}`);
}else if (imc > 19.1 && imc < 25.8){
    console.log(`peso normal, seu IMC é ${imc}`);
}else if (imc > 25.8 && imc < 27.3){
    console.log(`marginalmente acima do peso, seu IMC é ${imc}`);
}else if (imc > 27.3 && imc < 32.3){
    console.log(`acima do peso`);
}else {
    console.log(`lascou....`)
}