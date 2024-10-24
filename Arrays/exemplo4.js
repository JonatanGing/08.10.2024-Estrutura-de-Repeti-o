// crie um algoritimo que receba 10 números do usuario
// e imprima de tras para frente
const prompt = require("prompt-sync")();

let numeros = [];

// recebendo numeros
for (let i = 0; i < numeros.length; i++) {
       let numero = parseInt(prompt(`informe o ${i+1} número: `)); // pergunta a situação do parseInt, pois ele sem querer colocou sem durante o exemplo
       numeros.push(numero);
}

// imprimindo os elementos de tras pra frente
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Número ${i+1}: ${numeros[i]}`);
}