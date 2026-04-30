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

 **Nível Intermediário**

1. **Exibir os números pares de 1 a 50:**
    - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

alert("Mostrando os números pares de 0 a 50\n");
for(let i = 0; i <= 50; i+= 2){
    alert(`Número par: ${i}`)
}
--------------------------------------------------------------------
2. **Jogo de adivinhação:**
    - Gere um número aleatório de 1 a 100.
    - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
    - Informe se o número inserido é maior ou menor que o correto.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpite = 0;

while (palpite !== numeroSecreto){
    palpite = Number(prompt("Adivinhe o número (1 a 100):"));

    if (palpite > numeroSecreto) {
        alert("O número é menor!!")
    } else if (palpite < numeroScreto) {
        alert("O número é mairo")
    } else {
        alert("Acertou") 
    }
}
--------------------------------------------------------------------
3. **Contagem regressiva:**
    - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

let regressiva = prompt("Digite um número: ");
alert("Iniciando contagem regressiva...")

while (regressiva > 0) {
    alert(`${regressiva}...`);
    regressiva--
}
alert("KABUUUUUUUMMMMMMMMMM!!💣");
--------------------------------------------------------------------
### **Nível Avançado**

1. **Soma dos dígitos de um número:**
    - Peça ao usuário um número inteiro positivo.
    - Use um `while` para somar seus dígitos.

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let soma = 0;

while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10); 
}

alert(`A soma dos dígitos é: ${soma}`);

--------------------------------------------------------------------
2. **Fatorial de um número:**
    - Peça um número ao usuário.
    - Use um `for` ou `while` para calcular o fatorial desse número.
*/
let numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

alert(`Fatorial de ${numero} é: ${fatorial}`);

/*
3. **Inverter um número:**
    - Peça um número ao usuário.
    - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).
*/
/*
    4. **Números perfeitos de 1 a 1000:**
    - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
    - Exemplo: `6` → `1 + 2 + 3 = 6`.
    - Use um `for` aninhado para encontrar e exibir esses números até `1000`.

*/ 