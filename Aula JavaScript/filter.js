// Filter
/*  
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
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const par = number.filter((num)=>{
    return num % 2 === 0;
});
console.log(par)
// Callback
/* array.metodo((element,index, array) => {

});
*/

// forEach
/*  
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
*/

