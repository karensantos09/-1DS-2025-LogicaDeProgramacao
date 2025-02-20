//***********************Exercícios Vetor Matriz***********************//
//*********************************************************************//
//01- Crie um vetor que receberá dados de um usuário.

var dados = [];
console.log("Favor informar seu nome");
dados.push("Karen");

console.table(dados);

console.log("Informe seu CPF");
dados.push("123.456.789-10");

console.table(dados);

//02- Mostre ao usuário os dados e de um bom dia!
console.log("Bom dia", dados[0], ", seu CPF é:", dados[1]);
