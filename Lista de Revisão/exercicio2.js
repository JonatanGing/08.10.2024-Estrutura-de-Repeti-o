const prompt = require('prompt-sync')()

let soma = 0

for (i = 1; i <= 100; i++) {
    let impar = i % 2 == 1
    soma += impar;
}