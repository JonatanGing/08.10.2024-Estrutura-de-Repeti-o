// crie um laço FOr que calcule o fatorial de um numero
// (por exemplo 5! = 120)

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número: '));

let fatorial = 1;

// for (let iterator = numero; iterator >= 1; iterator--) {
//     fatorial *= iterator;
// }

// 

console.log(`${numero}! = ${fatorial}`);

// fatorial = 1 => iterator = 5 => fatorial = 1 * 5 = 5
// fatorial = 5 => iterator = 4 => fatorial = 5 * 4 = 20
// fatorial = 20 => iterator = 3  => fatorial = 20 * 3 = 60
// fatorial = 60 => iterator = 2 => fatorial 60 * 2 = 120
// fatorial = 120 => iterator = 1 => fatorial 120 * 1 = 120