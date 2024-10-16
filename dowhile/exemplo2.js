const prompt = require('prompt-sync')()



do {
    email = prompt("Digite seu e-mail:")
    senha = prompt("Digite sua senha:")
    senha = senha.toLowerCase()

} while (email !== "fulano@email.com" || senha !== "123456"); // V || V = V