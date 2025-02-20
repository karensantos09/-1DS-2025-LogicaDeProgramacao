//**********************************************************************
//                          Lista de exercícios 03
//01. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
//02. Adicione Tangerina no final.
//03. Adicione Goiaba no início.
//04. Exiba o conteúdo do índice 5.
//05. Exclua o elemento uva.
//06. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.

//Atividade 01.
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

//Atividade 02
frutas.push("Tangerina");
console.table(frutas);

//Atividade 03
frutas.unshift("Goiaba");
console.table(frutas);

//Atividade 04
console.log(frutas[5]);

//Atividade 05
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

//Atividade 06
var copia = frutas.slice(2,5)
console.table(copia);

