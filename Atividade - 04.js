//************************ Lista de Exercícios 04************************//
//***********************************************************************//

//01 - Crie e imprima um vetor com cinco elementos numéricos;
var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

//02 - Imprima na tela o terceiro elemento do vetor;
console.log(numeros[2]);

//03 - Faça uma cópia do vetor original;
var copia = numeros.slice();
console.table(copia);

//04 - Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original;
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

//05 - Crie uma matriz 3x3;
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

//06 - Imprima os valores da diagonal principal.
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
