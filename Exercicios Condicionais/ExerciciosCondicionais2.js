// Exercícios de Condicionais 2 //

/*--------------------------------------------------------------------
Nível Básico

--------------------------------------------------------------------
1. **Contagem de 1 a 10:**
    - Use um `for` para exibir os números de 1 a 10 no console.

alert("Contando de 1 a 10:\n")
for (let i = 1; i <= 10; i++) {
    alert(`Número: ${i}`)
}
--------------------------------------------------------------------
2. **Tabuada de um número:**
    - Peça um número ao usuário.
    - Exiba a tabuada desse número de 1 a 10 usando um `for`.


alert("Bem-Vindo a tabuada!");
const numero = Number(prompt("Tabuada de qual número: "));
if (Number.isNaN(numero)) {
  alert("Número inválido!");
} else {
  alert(`\n Tabuada do ${numero}\n`);

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    alert(`${numero} X ${i} = ${resultado}`);
  }
}
--------------------------------------------------------------------
3. **Soma dos primeiros N números naturais:**
    - Peça um número `N` ao usuário.
    - Use um `while` ou `for` para somar os números de `1` até `N`.
    - Exemplo:
        - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
            
            ```
            1 + 2 + 3 + 4 = 10
            ```
            
        - Se um usuário inserir o número 6, o código deverá fazer a soma do 1, 2, 3, 4 , 5 e 6 totalizando **21**.
            
            ```
            1 + 2 + 3 + 4 + 5 + 6 = 21

const Num = parseInt(prompt("Digite um número:"));

let soma = 0;

for (let i = 1; i <= Num; i++) {
  soma += i;
}

alert(`A soma de 1 até ${Num} é: ${soma}`);
--------------------------------------------------------------------
 **Nível Intermediário**

1. **Exibir os números pares de 1 a 50:**
    - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.
*/
alert("Mostrando os números pares de 0 a 50\n");
for(let i = 0; i <= 50; i+= 2){
    alert(`Número par: ${i}`)
}