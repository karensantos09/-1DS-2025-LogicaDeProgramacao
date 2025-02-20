// Operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; // idade igual idade mais um
console.log(idade);

idade--; // idade igual idade menos um
console.log(idade);
console.log("-----------------------------");

var novaIdade = idade++;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

//Operadores de atribuição aritmética
console.log("-----------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; //x igual x mais y
console.log("x =", x, "| y =", y);

x -= y; //x igual x menos y
console.log("x =", x, "| y =", y);

x *= y; // x igual x vezes y
console.log("x =", x, "| y =", y);

x /= y; //x igual x dividipo por y
console.log("x =", x, "| y =", y);

x **= y;//x igual x elevado a 
console.log("x =", x, "| y =", y);

x %= y;//x igual a resto da divisão inteira de x por y
console.log("x =", x, "| y =", y);

x = 13;
x %= y;//x igual a resto da divisão inteira de x por y
console.log("x =", x, "| y =", y);