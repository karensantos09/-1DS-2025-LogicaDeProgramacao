//Criando variáveis do tipo array (VETOR)
//var numeros = [1, 2, 3, 4, 5];
//console.log(numeros); //Imprimindo os dados do array
//console.table(numeros); //Imprimi os dados em forma de tabela
//console.log(numeros[1]); //Imprimindo o item de índice um
//console.log("O vetor tem:", numeros.length, "elementos.");

var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); //Imprimindo os dados
console.table(dinos); //Imprimindo os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//Adicionando elementos a um vetor existente
dinos.push("Brontossauro"); //Adiciona um elemento no final do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátops"); //Adiciona um elemento no inicio do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//Obtendo um elemento com base em seu índice (posição)
console.log("1ª posição:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); //Quando não temos o item, apresenta um erro (undefined)

//Alterando elementos com base no seu índice (posição)
dinos[3] = "Velociraptor";
console.table(dinos);

//Removendo elementos do vetor
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
];

dinos.pop(); //Remove o último elemento do array (vetor)
console.table(dinos);

dinos.shift(); //Removendo o primeiro elemento do array (vetor)
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento de índice um (a partir da posição um, exclui um elemento)
console.table(dinos);

//Procurando o índice (posição) de elementos
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);
var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posicao);

elementoProcurado = "Estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "estpa no indice:", posicao);

elementoProcurado = "Castelossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posicao);
console.log(
  "index0f = -1 significa que o elemento não foi encontrado no vetor!"
);

var elementoExcluir = "Pterodáctilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//Criando uma cópia de um array (vetor)
var copia = dinos.slice();
console.log("Copiando um vetor!");
console.table(copia);

//Criando um array numérico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

//Imprimindo os elementos das posições ímpares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//Verificando se o array contém um item
console.log("Contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("Contem 0", contem0);

//Ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

//Invertendo a ordem, ou posição dos itens
numeros.reverse();
console.table(numeros);

//Alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

//Criando arrays híbridos
var hibrido = [10, "Pafúncio", 3.45, "Zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "Tibúrcio";
console.table(hibrido);

//Criando uma matriz
var matriz = [[9, 0, 1], [7, 1, 2], [1, 3, 9]];
console.table(matriz);


//Obtendo elemento com base em seus índices
console.log("Matriz[1,2] =", matriz[1][2]);
console.log("Matriz[2,0] =", matriz[2][0]);

//Alterando o valor, ou valores de elementos com base em seus índices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);