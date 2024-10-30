// crie um algoritimo que receba 84 notas
// calcule a media e informe se o
// aluno está APROVADO ou REPROVADO
// a media é 7,0

const prompt = require("prompt-sync")();

// criando um array vazio chamado notas
let notas = new Array(84)

// criando uma variavel para armazenar a soma das notas
let soma = 0;


// recebendo notas
for (let i = 0; i < notas.length; i++) {
    const nota = parseFloat(prompt(`Informe a ${i+1}ª nota: `));
    notas[i] = nota; // [2, 9, 5, 8]
    soma += nota;
}

// calculando média
const media = soma / notas.length;

// verificando se o aluno está aprovado ou reprovado
const estahAprovado = media >= 7;
if (estahAprovado) {
    console.log(`Parabéns! Suas notas são ${notas}. Você foi aprovado com média ${media.toFixed(2)}`);
} else {
    console.log(`Suas notas são ${notas}`)
}