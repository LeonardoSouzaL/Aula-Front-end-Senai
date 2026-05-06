 //Exercícios Map, Find, Filter e Reduce

 /*
FILTER()
Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.
Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.
Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".
*/
const notas = [4, 7, 9, 3, 10, 5];
const palavras = ["sol", "mar", "computador", "lua", "código"];
const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const maiores = notas.filter((nota) =>{
    return nota >= 7;
})
console.log(maiores);

const numWord = palavras.filter((num)=>{
    return num.length >= 4;
})
console.log(numWord)

const iniAni = animais.filter((letra)=>{
    return letra.startsWith("c");
})
console.log(iniAni);

/*
FIND()
Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".
Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.
Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.
*/

/*
MAP()
Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).
Dado o array const produtos = ["camisa", "calça", "sapato"];, crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".
Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).
*/

/*
REDUCE()
Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).
Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.
Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.
 */