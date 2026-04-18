/*const { useActionState } = require("react");

// JavaScript: Condicionais (if, else, Operadores Lógicos).
const idade = 15;
if (idade >= 18) {
    console.log("Maior de idade!!");
}

if (idade >= 18) {
    console.log("Maior de idade!!");
} else {
    console.log("Menor de idade!! Caiu na lei Felca bobão!!");
}

// Operadores de Comparação
const a = 10;
const b = 5;
// Maior
console.log("10 > 5:", a > b);
console.log("10 > 5:", b > a);

// Menor
console.log("10 < 5:", b < a);
console.log("10 < 5:", b < a);

// Maior ou Igual
console.log("10 >= 5:", b >= a);
console.log("10 >= 5:", b >= a);

//Menor ou Igual
console.log("10 <= 5:", b <= a);
console.log("10 <= 5:", b <= a);

// Operador && (E / AND)
const idade1 = 20;
const temDocumento = true;
const estaLista = true;

if (idade1 >= 18 && temDocumento && estaLista) {
    console.log("Boa Festa!!")
} else {
    console.log("Lamento, Não pode entrar!!")
}

// Operador || (OU / OR)
const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log("Pode pagar!!")
} else {
    console.log("Não tem como pagar!!")
}

const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado!!")
} else {
    console.log("Acesso Negado!!")
}

if ((ehAdmin || ehGerente) && senhaCorreta)  {
     console.log("Acesso liberado!!")
} else {
     console.log("Acesso Negado!!")
}




const usuario1 = prompt("Digite seu Usuário: ");
const senha1 = prompt("Digite sua Senha: ");

const acessoAdmin1 =  (usuario1 === "admin" && senha1 === "1234");
const acessoUser1 = (usuario1 === "user" && senha1 === "1234");

if (acessoAdmin1 || acessoUser1) {
    alert("Acesso Liberado !!")
} else {
    alert("Acesso Negado !!")
}


const nota1 = 75;

if (nota1 >= 80) {
    console.log("Aprovado!");
} else if (nota1 >= 60) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!")
}

const temp = Number(prompt("Temperatura atual em C°:"))

if (Number.isNaN(temp)) {
    console.log("Temperatura Inválida!");
} else if (temp < 0) {
    console.log("Abaixo de 0 C°");
} else if (temp <= 15){
    console.log("Frio");
} else if (temp <= 25){
    console.log("Agradável")
} else if (temp <= 35) {
    console.log("Quente");
} else {
    console.log("Morte")
}

if (Number.isNaN(temp)) {
    
} else if (temp < 0){
    console.log("Abaixo de 0 C°");
} else if (temp >= 0 && temp <= 15){
    console.log("Frio")
} else if (temp > 15 && temp <= 25){
    console.log("Agradável")
} else if (temp > 25 && temp <= 35){
    console.log("Quente")
} else {
    console.log("Morte")
}


//Atividade: Semáforo (Estrutura Condicional)
*/

const usuarioSema = prompt("Digite uma cor para o Semáforo: ")
.toUpperCase()
.trim();
const verde = ("VERDE");
const amarelo = ("AMARELO");
const vermelho = ("VERMELHO");


if (usuarioSema === verde){
    alert("Sinal Verde, SIGA! 🟢🟢🟢🟢🟢🟢");
} else if (usuarioSema === amarelo){
    alert("Sinal Amarelo, ATENÇÃO 🟡🟡🟡🟡🟡🟡");
} else if (usuarioSema === vermelho){
    alert("Sinal Vermelho, PARE! ❌❌❌❌❌❌");
} else {
    alert("Cor de Semáforo invalida !! é Daltonico ??");
}

// Calculadora de IMC Validada

const pesoUsuario = Number(prompt("Digite seu peso em KG:(ex: 70"))
.isNaN()
.trim();
const altura = Number(prompt("Digite sua Altura em M:(ex:1.70)"))
.isNaN()
.trim();

if (Number.isNaN(pesoUsuario) || Number.isNaN(altura))  {
    alert("Digite apena números!")
} else if (pesoUsuario <= 0 || altura <= 0){
    alert("Peso e altura devem ser positivos!")
} else if(altura > 3){
    alert("Altura parece estar errada!")
} else {
    const IMC = (altura**2) / pesoUsuario;
    alert(`Seu IMC: ${IMC.toFixed(2)}`);

    if (IMC < 18.5) {
        alert("Abaixo do Peso!")
    } else if (IMC < 25) {
        alert("Peso Normal!")
    } else if (IMC < 30){
        alert("Sobrepeso!")
    } else {
        alert("Obesidade!")
    }
}


