/*

// forEach
 
const alunos = ["Lucas", "Maria", "João"];

alunos.forEach((nome,index) => {
    console.log(`${index + 1} aluno: ${nome}`);
})

const frutas = ["Maçã","Banana","Uva"];

frutas.forEach((element, index) => {
    console.log(index, element);
});

// For padrão
for (let i = 0; i < frutas.length; i++){
    console.log(i,frutas[i])
}


// Filter
 
const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const novoArray = array.filter((element)=>{
    return condicao;
});

const maiores = people.filter((person) =>{
    return person.age >= 18;
})
console.log(maiores);


const number = [1, 2, 3, 4, 5, 6, 7, 8];
const par = number.filter((num)=>{
    return num % 2 === 0;
});
console.log(par)
// Callback
array.metodo((element,index, array) => {

});


const nums = [10,55,80,20,100];

const maior = nums.filter((numero)=>{
    return numero > 50;
});
console.log(maior);


// Map
const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const nomes = people.map((person) => {
    return person.nome.toUpperCase();
})
console.log(nomes);


const  numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) =>{
    return numero * 2;
})
console.log(dobro);

const pordutos = ["Mouse","Teclado","Monitor"];

const frases = pordutos.map((produto) =>{
    return`Produto: ${produto}`
});
console.log(frases)


const pessoas = [
    {nome: "Leonardo", idade: 35},
    {nome: "Lucas", idade: 8},
]

const resultado = pessoas.map((pessoa)=> {
    return{
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >= 18
    };
});
console.log(resultado);


const precos = [100, 200, 300];

const conta = precos.map((att) =>{
    return att * 0.9;
})
console.log(conta)


const texto = [1,2,3,4];

const result = texto.map((concat) =>{
    return `Numero ${concat}`;
});
console.log(result)


// Find

const item = array.find((element) =>{
    return condição
})


const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const maria = people.find((person) =>{
    return person.name === "Maria";
});
console.log(maria);


const numeros = [5,10,15,20,25];

const num = numeros.find((numero) =>{
    return numero > 18;
})
console.log(num)


const usuarios = [
    {id:1, nome:"Leonardo"},
    {id:2, nome:"Lucas"},
    {id:3, nome:"João"},
];
const usuario = usuarios.find((u) =>{
    return u.id === 2;
})
console.log(usuario);


const numeros = [5,8,-2,10,-7];

const num = numeros.find((numero) =>{
    return numero < 0;
});
console.log(num);


// Reduce

array.reduce((acc, element) =>{
    return novoACC;
}, valorInicial);


const numeros = [10,20,30];

const soma = numeros.reduce((acc, numero) =>{
    console.log("ACC:", acc);
    console.log("Número atual:", numero);
    return acc + numero;
}, 0);
console.log(soma);


const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];
const totalIdade = people.reduce((acc, person) =>{
    return acc + person.age;
}, 0);
console.log(totalIdade);


const people = [
    {nome: "Lucas"},
    {nome: "Maria"},
    {nome: "João"},
    {nome: "Ana"},
];
const nomes = people.reduce((acc, person) =>{
    return acc + " " + person.nome; 
}, "");
console.log(nomes);


const numero = [2,3,4];
const num = numero.reduce((acc, numeros)=>{
    return acc * numeros
}, 1)
console.log(num);


const carrinho = [
    {produto:"Mouse", perco:50},
    {produto:"Teclado", perco:100},
    {produto:"Monitor", perco:900},
];
const soma = carrinho.reduce((acc, cont) =>{
    return acc + cont.perco;
}, 0);
console.log(soma)

const palavras = ["oi","javascript","html"];
const qtdLetra = palavras.reduce((acc, count) =>{
    return acc + count.length;  
}, 0);
console.log(qtdLetra);

// Use o Reduce para descobrir: qual o maior número do array.
const numeros = [10,45,7,99,32];
const maiorNum = numeros.reduce((acc, numero)=>{
     if (numero > acc){
        return numero;
     }
     return acc;
}, numeros[0]);
console.log(maiorNum);

const pordutos = [
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 200},
    {nome: "Monitor", preco: 900},
    {nome: "Notebook", preco: 3000},
];
const resultado = pordutos.filter((porduto)=>{
    return porduto.preco > 100;
})
.map((porduto)=>{
    return porduto.nome;
});
console.log(resultado);

const filmes = [
    {nome:"Vingadores", nota: 9},
    {nome:"Batman", nota: 7},
    {nome:"Dragon Ball", nota: 10},
    {nome:"Matrix", nota: 8},
]
//Use filter para pegar notas >= 8
//Use o map para pegar apenas nomes:
//Use o find para encontrar o "Batman"
//Use o reduce para somar todas as notas
const filtro = filmes.filter((filme)=>{
    return filme.nota >= 8;
})
.map((filme)=>{
    return filme.nome;
}) 
console.log(`Os filmes com a nota maior que 7 são: ${filtro}`);

const filtros = filmes.find((Bat)=>{
    return Bat.nome === "Batman";
})
console.log(filtros);

const somaNotas = filmes.reduce((acc,filme)=>{
    return acc + filme.nota;
});
console.log(somaNotas);


//Switch 
const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia Invalido!!");
        break;
}


const n1 = 10;
const n2 = 5;

const operacao = "+"

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    case "/":
        console.log(n1/n2);
        break;
    default:
        console.log("Operação inválida !!")
        break;
}


// Faça um sistema de notas:
// A -> Excelente
// B -> Bom
// C -> Regular
// D -> Ruim

const notaUsu = prompt("Digite sua nota: (A, B, C ou D)")

switch (notaUsu) {
    case "A": 
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break
    default:
        console.log("Nota Inválida !!")
        break;
}
*/
/* 
// Faça um sistema de notas:
// A -> Excelente
// B -> Bom
// C -> Regular
// D -> Ruim

const A = 100
const B = 80
const C = 60
const D = 30

let notaUsu = prompt("Digite sua nota:")
if (notaUsu >= 81) {
    notaUsu = 100
} else if (notaUsu >= 61 && notaUsu <= 80){
    notaUsu = 80
} else if (notaUsu >= 31 && notaUsu <= 60){
    notaUsu = 60
} else {
    notaUsu = 30
}
switch (notaUsu) {
    case 100: 
        alert("Excelente");
        break;
    case 80:
        alert("Bom");
        break;
    case 60:
        alert("Regular");
        break;
    case 30:
        alert("Ruim");
        break
    default:
        alert("Nota Inválida !!")
        break;
}
 */

// Crie um sistema de menu de videogame:

//1 -> Jogar
//2 -> Configurações
//3 -> Créditos
//4 -> Sair

let opcao;
do {
       opcao = Number(prompt(
        "=========== SISTEMA DE ESTOQUE ===========\n" +
        "1 - Jogar\n" +
        "2 - Configurações\n" +
        "3 - Créditos\n" +
        "4 - Sair\n" +
        "=========================================\n" +
        "Escolha uma opção:"
        ));
        
        switch (opcao) {
            case 1:
                alert("Iniciando jogo, Aguarde...");
                break;
            case 2:
                alert("Entrando em Configurações...");
                break;
            case 3:
                alert("Carregando Créditos...")
                break;
            case 4:
                alert("Obrigado por jogar, volte sempre !!");
                break
            default:
                alert("Opção Inválida !!")
                break;
        }
} while (opcao !== 4);