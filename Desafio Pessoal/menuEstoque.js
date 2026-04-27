/* 
Materiais de Apoio:

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
--------------------------------------------------------------------------------------------------------------------------------------
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
*/

// Estoque inicial

//Objeto
const estoque = {
    "notebook": 15,
    "mouse": 50,
    "teclado": 30,
    "monitor": 8,
    "webcam": 22
};

// Opção precisa ser "Let", para o usuário poder escolher outras opções durante o código.
let opcao;

// Utilizando o "Do/While" para que o usuário só saia caso deseje sair.
do {
    // Aqui eu dou a opção para o usuário escolher oque deseja fazer.
    opcao = prompt(
        "=========== SISTEMA DE ESTOQUE ===========\n" +
        "1 - Ver produtos\n" +
        "2 - Adicionar ao estoque\n" +
        "3 - Retirar do estoque\n" +
        "4 - Cadastrar novo produto\n" +
        "0 - Sair\n" +
        "=========================================\n" +
        "Escolha uma opção:"
    );
    
    // Ver Estoque.
    /* 
    Explicação: 
    - O primeiro "IF" vai servir para pegar a opção que o usuário escolher, no caso de ser "1".
    - A minha "lista" precisa ser "Let" porque a lista vai acrescentando os produtos percorridos para mostrar para o usuário.
    - "For In" ele percorre meu estoque e mostra os produtos que tem nele e coloca os estoque na minha lista para mostrar para o usuário.
    - Para fazer o usuário selecionar qual produto do meu estoque ele deseja ver, trago um "Let escolha", para que ele possa escolher outros produtos depois.
      (.toLowerCase só para evitar erros).
    - Segundo "IF" ele vai, com base na "[escolha]" do usuário percorrer meu "estoque" e caso ele exista (!== undefined), ele pega "estoque[escolha]" a escolha do usuário 
      no meu estoque e me trás a "quantidade" de itens selecionado, usando "Let" pois pode mudar quando colocar ou tirar item no estoque.
    - Terceiro "IF" serve para realizar a validação que, se caso a quantidade de item for < 10 ele me da um alerta de estoque baixo, trazendo a "escolha" do usuário e a
      "quantidade" de unidades disponivel, se não "ELSE" me trás só a "escolha" e a "quantiadade".
    - "ELSE" do segundo "IF" avisa que o produto não foi encontrado. 
    */
    if (opcao === "1") {
        let lista = "Os Produtos disponíveis são: \n"
        for(let produto in estoque){
            lista += `- ${produto}\n`
        }

        let escolha = prompt(lista + "\nDigite o nome do produto: ")
        .toLowerCase();

        if (estoque[escolha] !== undefined) {
            let quantidade = estoque[escolha];

            if (quantidade < 10) {
                alert(`⚠ CUIDADO! Baixo estoque! ⚠\n ${escolha}: ${quantidade} unidades.\n Providêncie mais itens!!`);
            } else {
                alert(`${escolha}: ${quantidade} unidade.`);
            }
            
        } else {
            alert("Produto não encontrado!");
        }
    }

    // Adicionar quantidade.
    /* 
    Explicação:
    - "ELSE IF" serve para pegar a escolha do usuário no menu.
    - A escolha do produto precisa ser em "LET" porque vou dar a opção de escolher outros produtos.
    - Segundo "IF" ele vai, com base na "[produto]" escolhido do usuário percorrer meu "estoque" e caso ele exista (!== undefined), ele segue para o terceiro "IF"
    - "LET quantidade" server para gravar a quantidade que o usuário deseja acrescentar no estoque (parseInt só para previnir erros).
    - Terceiro "IF" ele vai validar se o valor que o usuário quer colocar é > 0. Se sim, ele vai pegar a quantidade do "[produto]" no meu "estoque" e somar
      += a "quantidade" que o usuário solicitou.
    - Se não "ELSE" fala que a quantidade é inválida.
    - Se cair no "ELSE" do segundo "IF" significa que o produto não existe no meu objeto. 
    */
    else if (opcao === "2") {
        let produto = prompt("Digite o nome do produto:")
        .toLowerCase();

        if (estoque[produto] !== undefined) {
            let quantidade = parseInt(prompt("Quantidade a adicionar:"));

            if (quantidade > 0) {
                estoque[produto] += quantidade;
                alert(`✔ Estoque atualizado! ✔\n${produto}: ${estoque[produto]} unidades`);
            } else {
                alert("⚠ Quantidade inválida! ⚠");
            }
        } else {
            alert("⚠ Produto não encontrado! ⚠");
        }
    }

    // Retirar quantidade
    /* 
    Explicação:
    - "ELSE IF" serve para pegar a escolha do usuário no menu.
    - A escolha do produto precisa ser em "LET" porque vou dar a opção de escolher outros produtos.
    - Segundo "IF" ele vai, com base no "[produto]" escolhido do usuário, percorrendo meu "estoque" e caso ele exista (!== undefined), ele segue para o terceiro "IF"
    - "LET quantidade" server para gravar a quantidade que o usuário deseja acrescentar no estoque (parseInt só para previnir erros).
    - O terceiro "IF" ele server para fazer uma validação, para o usuário consegui retirar algum produto do estoque, o estoque não pode estar zerado e tambem
      não pode ser um valor que seja maior que o valor que possui no estoque. Se for validado e o usuário poder tirar do estoque ele vai pegar a "quantidade"
      do produto no estoque (estoque[produto]) e diminuir -= da "quantidade" que o usuário inseriu.
    - SE NÃO "ELSE" ele mostra que a quantidade é invalida ou insuficiente para tirar do estoque.
    - Se cair no "ELSE" do segundo "IF" significa que o produto não existe no meu objeto.   
    */
    else if (opcao === "3") {
        let produto = prompt("Digite o nome do produto:")
        .toLowerCase();

        if (estoque[produto] !== undefined) {
            let quantidade = parseInt(prompt("Quantidade a retirar:"));

            if (quantidade > 0 && quantidade <= estoque[produto]) {
                estoque[produto] -= quantidade;
                alert(`✔ Retirada realizada! ✔\n${produto}: ${estoque[produto]} unidades`);
            } else {
                alert("⚠ Quantidade inválida ou insuficiente! ⚠");
            }
        } else {
            alert("⚠ Produto não encontrado! ⚠");
        }
    }
    // Cadastro de novo produto
    /* 
    Explicação:
    - "ELSE IF" serve para pegar a escolha do usuário no menu.
    - A escolha do novo produto precisa ser em "LET" porque vou dar a opção de serem criados novos produtos e dar o nome para do produto pra ser colocado no estoque.
    - Segundo "IF" ele pega o "[Novo produto]" e cheka ele no estoque, caso ele não exista, ele segue para poder ser criado.
    - O usuário escolhe a quantidade de produto que deseja colocar em estoque. (quantidadeInicial).
    - Terceiro "IF" verfica se o produto é igual ou maior que zero porque, mesmo se o usuário ainda não tiver nenhum item, ainda permite criar o item no estoque
      para futuras movimentações.
    - Se não "ELSE" ele diz que a quantidade é inválida.
    -  o "ELSE" do Segundo "IF" server para, caso o produto ja exista no estoque, o sistema não deixe criar o mesmo item ja existente.
    */
    else if (opcao === "4"){
        let novoProduto = prompt("Digite o nome do novo produto: ")
        .toLowerCase();

        if (estoque[novoProduto] === undefined) {
            let quantidadeInicial = parseInt(prompt(`Digite a quantidade de ${novoProduto} que deseja colocar em seu estoque: `));

            if (quantidadeInicial >= 0) {
                estoque[novoProduto] = quantidadeInicial;
                alert(`✔ Produto ${novoProduto} cadastrado com Sucesso!! ✔\n Quantidade de ${novoProduto} no estoque é de: ${quantidadeInicial}`)
            } else {
                alert("⚠ Quantidade inválida!! ⚠");
            }
        } else {
            alert("!! Esse produto já existe no estoque !!");
        }
    }
    // Saindo do Sistema
    /* 
    Explicação:
    - "ELSE IF" serve para pegar a escolha do usuário no menu. Se for 0 o usuário sai do sistema.
    */
    else if (opcao === "0"){
        alert("Saindo do Sistema... Volte sempre ❤");
    }
} while (opcao !== "0");