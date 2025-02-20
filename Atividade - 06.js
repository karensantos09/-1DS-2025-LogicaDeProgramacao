//************************ Lista de Exercícios 04************************//
//***********************************************************************//

//Atividade 01- Crie uma função que receba o nome e a idade de uma pessoa, e retorne uma mensagem informando se ela pode votar no Brasil.

//Regras para votação no Brasil:
//Menores de 16 anos: Não podem votar
//Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
//Entre 18 e 70 anos: O voto é obrigatório.
// if = se | else if = se não
const podeVotar = (idade) => {
  //isso é uma função
  if (idade < 16) {
    return "Não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return "Pode votar!";
  } else {
    return "Voto facultativo!";
  }
};
var nome = ["Ygona", "Lucas", "Fernanda", "Cristinne", "Batata"];
console.log("Olá", nome[0], "você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "você tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2], "você tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3], "você tem 12 anos e", podeVotar(12));
console.log("Olá", nome[4], "você tem 67 anos e", podeVotar(67));
