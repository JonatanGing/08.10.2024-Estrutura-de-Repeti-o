const prompt = require('prompt-sync')();
let email; 

let senha;

while (email === "fulano@email.com" && senha === 123456){
    email = prompt("Digite seu e-mail:")
    senha = prompt("Digite sua senha:")
}