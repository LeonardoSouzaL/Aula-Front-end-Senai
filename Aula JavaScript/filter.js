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
*/

const carrinho = [
    {produto:"Mouse", perco:50},
    {produto:"Teclado", perco:100},
    {produto:"Monitor", perco:900},
];
const soma = carrinho.reduce((acc, cont) =>{
    return acc + cont.perco;
}, 0);
console.log(soma)
