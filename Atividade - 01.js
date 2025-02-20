/*****************************************************
Exercícios para fixação
*****************************************************/
/*
1. Crie uma variável e atribua o nome de uma pessoa;
2. Crie uma variável e atribua o nome de um banco;
3. Crie uma variável e atribua o número da agência;
4. Crie uma variável e atribua o número da conta;
5. Crie uma variável e atribua o saldo da conta;
6. Imprima os dados e o saldo da conta;
7. Efetue e imprima 5 movimentações na conta;
8. Imprima novamente os dados e o saldo da conta;
*/

let nome = "Nicolas";
let banco = "Nubank";
let agencia = "0447";
let conta = "15042-9";
let saldo = 1500;

console.log("**********", banco, "**********");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta:", conta);
console.log("Saldo: R$", saldo);

console.log("    + Depósito: R$2700,00");
saldo = saldo + 2700;
console.log("    + Depósito: R$1800,00");
saldo = saldo + 1800;
console.log("    - Saque: R$850,00");
saldo = saldo - 850;
console.log("    + Depósito: R$130,00");
saldo = saldo + 130;
console.log("    - Saque: R$1500,00");
saldo = saldo - 1500;
console.log("    + Depósito: R$50,00");
saldo += 50; // mesma coisa que: saldo = saldo + ...
saldo -= 80; // mesma coisa que: saldo = saldo - ...

console.log("**********", banco, "**********");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta:", conta);
console.log("Saldo: R$", saldo);
