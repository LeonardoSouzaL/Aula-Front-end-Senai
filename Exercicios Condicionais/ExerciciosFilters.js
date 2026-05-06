 //Exercícios Map, Find, Filter e Reduce

 /*
FILTER()
Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.
Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, filtre apenas as palavras com mais de 4 letras.
Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, filtre apenas os animais cujo nome começa com a letra "c".

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
*/


/*
FIND()
Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".
Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.
Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, encontre o primeiro aluno com nota maior ou igual a 7.

//
const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

const primeiroFilmeComB = filmes.find(filme => filme.startsWith("B"));

console.log(primeiroFilmeComB);

//
const numeros = [2, 4, 6, 9, 12, 15];

const primeiroImpar = numeros.find(numero => numero % 2 !== 0);

console.log(primeiroImpar);

//
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 9 }
];

const primeiroAlunoAprovado = alunos.find(aluno => aluno.nota >= 7);

console.log(primeiroAlunoAprovado);
*/
/*
MAP()
Dado o array const temperaturas = [20, 25, 30, 15];, crie um novo array convertendo para Fahrenheit (C * 1.8 + 32).
Dado o array const produtos = ["camisa", "calça", "sapato"];, crie um novo array com os nomes em maiúsculo e prefixo "Produto: ".
Dado o array const numeros = [1, 2, 3, 4];, crie um novo array com cada número elevado ao quadrado (x ** 2).

//
const temperaturas = [20, 25, 30, 15];

const temperaturasFahrenheit = temperaturas.map(celsius => celsius * 1.8 + 32);

console.log(temperaturasFahrenheit);

//
const produtos = ["camisa", "calça", "sapato"];

const produtosFormatados = produtos.map(produto => `Produto: ${produto.toUpperCase()}`);

console.log(produtosFormatados);

//
const numeros = [1, 2, 3, 4];

const numerosAoQuadrado = numeros.map(numero => numero ** 2);

console.log(numerosAoQuadrado);
*/

/*
REDUCE()
Dado o array const valores = [100, 200, 50, 150];, calcule o total (como se fosse uma soma de compras).
Dado o array const palavras = ["JS", "é", "muito", "legal"];, use reduce para juntar tudo em uma única frase.
Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a média.


//
const valores = [100, 200, 50, 150];

const total = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(total);

//
const palavras = ["JS", "é", "muito", "legal"];

const frase = palavras.reduce((acumulador, palavraAtual) => {
    return acumulador + " " + palavraAtual;
});

console.log(frase);

//
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
}, 0);

const media = soma / numeros.length;

console.log(media);
*/


/* 
### **DESAFIOS (misturando funções)**

1. **Dado o array**

```jsx
const livros = [
  { titulo: "Dom Casmurro", paginas: 300 },
  { titulo: "O Hobbit", paginas: 295 },
  { titulo: "A Revolução dos Bichos", paginas: 112 }
];
```

- Filtre apenas os livros com mais de 200 páginas.
- Crie um array apenas com os títulos.
- Calcule o total de páginas de todos os livros.



// 1. Filtrar apenas os livros com mais de 200 páginas
const livrosComMaisDe200Paginas = livros.filter(livro => livro.paginas > 200);
console.log(livrosComMaisDe200Paginas);

// 2. Criar um array apenas com os títulos
const titulos = livros.map(livro => livro.titulo);
console.log(titulos);

// 3. Calcular o total de páginas de todos os livros
const totalPaginas = livros.reduce((acumulador, livro) => {
  return acumulador + livro.paginas;
}, 0);
console.log(totalPaginas);
*/


/* 
2. **Dado o array**

```jsx
const carrinho = [
  { produto: "Notebook", preco: 2500 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
];
```

- Use `map` para criar uma lista de strings no formato `"Produto: X - R$ Y"`.
- Use `reduce` para calcular o valor total da compra.
- Use `find` para encontrar o produto chamado `"Mouse"`.

const carrinho = [
  { produto: "Notebook", preco: 2500 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
];

// 1. Criar lista de strings no formato "Produto: X - R$ Y"
const listaProdutos = carrinho.map(item => {
  return `Produto: ${item.produto} - R$ ${item.preco}`;
});
console.log(listaProdutos);

// 2. Calcular o valor total da compra
const totalCompra = carrinho.reduce((acumulador, item) => {
  return acumulador + item.preco;
}, 0);
console.log(totalCompra);

// 3. Encontrar o produto chamado "Mouse"
const produtoMouse = carrinho.find(item => item.produto === "Mouse");
console.log(produtoMouse);
*/