/*  WHILE
while (condition) {
    // código se repete enquanto a condição for True
}


// Contagem de 1 a 5

let contador = 1;

while (contador <= 5) {
    console.log(`Contagem: ${contador}`);
    contador++
}

// Contagem regressiva de 10 até 1

let regressiva = 10;
console.log("Iniciando contagem regressiva...")

while (regressiva > 0) {
    console.log(`${regressiva}...`);
    regressiva--
}
console.log("KABUUUUUUUMMMMMMMMMM!!💣")

// Validação de Senha

const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite sua senha: ");
    if (tentativa === senhaCorreta) {
        console.log("Senha Correta!!");
    } else {
        console.log("Senha Incorreta!! Tente novamente");
    }
}

// Somar números até ultrapassar 100

let soma = 0;
let numero = 1;

console.log("Somando números até passar de 100...");
while (soma < 100) {
    soma += numero;
    console.log(`${numero} Soma parcial: ${soma}`);
    numero++
}
console.log(`\n Precisou de ${numero - 1} números para ultrapssar o 100`);
console.log("Soma final: " + soma);


const numero = Number(prompt("Qual o número: "));

if (Number.isNaN(numero)) {
    alert("Digite um número válido!");
} else {
    let multiplicador = 1;
    let resultadoFinal = `Tabuada do ${numero}\n\n`;

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador;
        resultadoFinal += `${numero} x ${multiplicador} = ${resultado}\n`;
        multiplicador++;
    }

    alert(resultadoFinal);
}


let y = 10;
do {
    console.log("Isso vai aparecer uma vez")
} while (y < 5);

// Menu Interativo
let opcao;
let saldo = 1000;

do {
    
    opcao = prompt(
        "================= Menu =================\n" +
        "1 - Ver saldo\n" +
        "2 - Fazer depósito\n" +
        "3 - Fazer saque\n" +
        "0 - Sair\n" +
        "=======================================\n" +
        "Escolha a opção desejada:"
    );

    if (opcao === "1") {
        alert(`Seu saldo é de: R$ ${saldo}`);
    } 
    else if (opcao === "2") {
        let valorDeposito = parseFloat(prompt("Qual valor deseja depositar?"));
        if (valorDeposito > 0) {
            saldo += valorDeposito; 
            alert(`Depósito realizado! Saldo atual: R$ ${saldo}`);
        } else {
            alert("Valor de depósito inválido!");
        }
    } 
    else if (opcao === "3") {
        let saque = prompt("Digite o valor que deseja sacar:");
        if (saque > 0 && saque <= saldo) {
            saldo -= saque; 
            alert(`Saque realizado! Saldo atual: R$ ${saldo}`);
        } else {
            alert("Operação impossível! Verifique o valor ou seu saldo.");
        }
    } 
    else if (opcao === "0") {
        alert("Até logo!");
    } 
    else {
        alert("Opção inválida!");
    }
} while (opcao !== "0");


// Jogo: Adivinhe o número
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Math.random 0.0 0.9999999999...
// * 10 0.0 9.9999...
// Math.floor 0 - 9
// + 1 0 - = 1 - 10

let palpite;
let tentativas = 0;
console.log("Adivinhe o numero entre 1 e 10");

do {
    palpite = Number(prompt("Seu palpite: "));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("Digite um número válido!")
    } else if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente Novamente")
    } else if (palpite > numeroSecreto){
        console.log("Muito baixo! Tente Novamente")
    } else {
        console.log(`ACERTOOOOU!!!! O numero secreto era: ${numeroSecreto}`)
    }
} while (palpite !== numeroSecreto);
*/

//const { captureOwnerStack } = require("react");

// For
/* 
console.log("Contando de 1 a 10:\n")
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}


// Tabuada 
const numero = Number(prompt("Tabuada de qual número: "))
if (Number.isNaN(numero)) {
    console.log("Número inválido!")
} else {
    console.log(`\n Tabuada do ${numero}\n`);

    for (let i = 1; i <= 10; i++){
        const resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`)
    }
}


// Números pares (0 a 20)
console.log("Mostrando os números pares de 0 a 20\n");
for(let i = 0; i <= 20; i+= 2){
    console.log(`Número par: ${i}`)
}


// Contagem regressiva
console.log("Iniciando contagem regressiva!! \n");
for(let i = 100; i >= 0; i--){
    console.log(i)
}


const altura = 5;
for (let linha = 1; linha <= altura; linha++){
    let asteriscos = "";

    for (let i = 1; i <= linha; i++){
        asteriscos += "* "
    }
    console.log(asteriscos);
}


// Array (Lista)
const frutas = ["Maçã", "Banana", "Laranja", "Uva"]
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log(frutas.length);


//for of
for (const item of frutas) {
    console.log(`- ${frutas}`)
}


// Soma de todos os número do arry
const numeros = [10, 25, 8, 42, 15, 7];
let soma = 0;
for (const item of numeros ) {
    soma += item
}
console.log(`A soma de todos os números da sua lista é de: ${soma}`)


// Objetos
const pessoa = {
    nome: "Leonardo",
    idade: 25,
    cidade: "Suzano",
    profissao: "Faz tudo"
}

console.log(pessoa.nome)
console.log(pessoa["idade"])

//for in
for (const chave in objeto){

}


const aluno = {
    nome: "Maria Silva",
    matricula: 20223401,
    curso: "Desenvolvedor Web",
    nota: 9.5
};

console.log(`Dados do Aluno: \n`);
for (const chave in aluno) {
    const valor = aluno[chave]
    console.log(`${chave}: ${valor}`)
}


// Estoque de produtos
const estoque = {
    "notebook": 15,
    "Mouse": 50,
    "Teclado": 30,
    "Monitor": 8,
    "Webcam": 22
}

console.log("Quantidade em Estoque: \n");
for(const produto in estoque){
    const quantidade = estoque [produto];
    
    if (quantidade < 10) {
        console.log(`Baixo estoque, providencie a compra de mais, ${produto}: ${quantidade} unidades`);
    } else {
        console.log(`${produto}: ${quantidade}`)
    }
}
*/