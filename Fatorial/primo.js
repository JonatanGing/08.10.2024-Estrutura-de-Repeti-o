// É primo ou não?
// Um número 


const prompt = require("prompt-sync")();
const numero = parseInt(prompt("Digite um número: "));
let divisores = 0;

// contar a quantidade de divisores
// for (let i = 1; i <= numero && divisores <= 2; i++) {
//    let ehDivisivel = numero % i === 0;
//    if (ehDivisivel) divisores++;
//    console.log(i,`${numero} / ${i} = ${numero % i}`, ehDivisivel);
// }

// Formato while
let i = 1;
while (i <= numero && divisores <= 2) {
    let ehDivisivel = numero % i === 0;
    if (ehDivisivel) divisores++;
    i++;
}

// verificar se é primo
let ehPrimo = divisores === 2;
if (ehPrimo) {
    console.log("É primo");
} else {
    console.log("Não é primo");
}

