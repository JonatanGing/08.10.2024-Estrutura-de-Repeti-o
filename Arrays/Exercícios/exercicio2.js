// Crie um array numeros com os valores [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Faça um algoritmo que some todos
// os elementos e exiba o resultado no console.
const prompt = require("prompt-sync")();

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0

for(let i = 0; i < numeros.length; i++) {
    let resultado = soma + numeros.length
    console.log(` O Resultado é ${resultado} `);
}

