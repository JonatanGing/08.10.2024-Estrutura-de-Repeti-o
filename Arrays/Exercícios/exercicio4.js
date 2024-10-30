// Crie um array cores com 5 elementos: "vermelho", "azul", "verde", "amarelo", "preto". 
// Crie um algoritmo que retorne o índice da cor "verde".

const cores = [
    "vermelho",
    "azul",
    "verde",
    "amarelo",
    "preto"
];

let indice = -1; // -1 indica que a cor não foi encontrada;

for (let i = 0; i < cores.length; i++) {
    let ehVerde = cores[i] === "verde"
    if (ehVerde) {
        indice = i;
        break;
    }
}

console.log(`O indice da cor verde é ${indice}. `);