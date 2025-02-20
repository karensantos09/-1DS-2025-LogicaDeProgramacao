// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("-------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscua são diferentes de minúsculas)
console.log("criando uma variável Teste e tentando acessar como testE.");
let Teste = "Variável teste!";
//console.log(testE)
console.log(Teste);

//Regras para nomear identificadores (variáveis)
//Podem iniciar com 'A'-'Z', 'a'-'z', '_' ou '$'
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variáveis lógicas (boolean) (ou seja, somente verdadeiro ou falso, sim ou não!)
var nome = "Karen";
var rico = false;
var eLinda = true;
console.log("Nome:", nome, "| É linda?", eLinda, "|É rico?", rico);
