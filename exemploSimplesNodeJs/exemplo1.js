const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nome1;
var idade1;

rl.question('Qual o seu nome ', (nome) => {
    nome1 = nome;
    console.log('Seu nome é :' + nome);
    rl.question('Qual é a sua idade ', (idade) => {
        idade1 = idade
        console.log(idade);
        rl.close
    });
});

console.log(nome1);
console.log(idade1);
