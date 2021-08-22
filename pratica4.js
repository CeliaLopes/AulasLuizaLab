var pedido = 102;
var qtdade = 2;
var total;

switch(pedido){
    case 100:
        total = 1.20 * qtdade;
        console.log(`voce pediu cachorro quente e vai pagar ${total}`);
        break;
    case 101:
        total = 1.30 * qtdade;
        console.log(`voce pediu bauru simples e vai pagar ${total}`);
        break;
    case 102:
        total = 1.50 * qtdade;
        console.log(`voce pediu bauru com ovo e vai pagar ${total}`);
        break;
        default:
        console.log('Codigo não existe');            
    }
