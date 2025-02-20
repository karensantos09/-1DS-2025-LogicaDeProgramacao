/***************************************************** 
                Lista de Exercícios 
*****************************************************/

console.log("----------- atividade 1--------------");
//1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa - Crie uma variável numérica e armazene o ano de nascimento - Escreva "Nome da pessoa" nasceu em "ano de nascimento" - Calcule a idade da pessoa - Escreva "Nome da pessoa" tem "idade" anos

var nome = "Karen";

var nascimento = "2009";

var idade = 2025 - nascimento;

console.log(nome, "nasceu em", nascimento);
console.log(nome, "tem", idade, "anos");

console.log("----------- atividade 2--------------");
//2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?

var x = 12;
var y = 6;
var area = x * y;
console.log("x", x, "* y", y, "area", area);

console.log("A área é de", area);

console.log("----------- atividade 3--------------");
//3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?

var profundidade = 5;
var volume = area * profundidade;
console.log("O volume do retângulo é:", volume);

console.log("----------- atividade 4--------------");
//4. Se temos uma equação 2x2 + 3x -1, qual seria o valor de delta?

var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("O valor de delta é:", delta);

console.log("----------- atividade 5--------------");
//5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. Qual o valor do desconto e o valor final da compra ?
13, 5;
436, 5;
var compra = 450;
var desconto = 0.03; //var desconto = três dividido por cem
desconto = compra * desconto;
var total = compra - desconto;
console.log("Compra: R$",compra," - Desconto R$",desconto, " = Total:",total);


console.log("----------- atividade 6--------------");
//6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  Calcule a distância percorrida, sabendo que Vmedia = S/T 

var tempo = 3.5
var velocidade = 95
var distancia = tempo * velocidade;
console.log("A distância percorrida é de:", distancia, "KM")
