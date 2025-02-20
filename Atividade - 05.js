//************************ Lista de Exercícios 05************************//
//***********************************************************************//
//01- Crie uma função que recebe como parâmetro o ano de nascimento de uma pessoa e retorne sua idade;
console.log("---------------------Atividade 01---------------------");

function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Karen", "2009");

//02- Crie uma função que retorna a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L
console.log("---------------------Atividade 02---------------------");
function combustivel(litro) {
  return litro * 12;
}

console.log(
  "Eu abasteci meu carro com 24 litros, e agora consigo viajar",
  combustivel(24),
  "km!"
);
