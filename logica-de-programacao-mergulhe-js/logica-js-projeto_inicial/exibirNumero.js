// 1. Exibindo uma mensagem de boas-vindas com console.log:
console.log("Olá! Bem-vindo!");

// 2. Exibindo uma mensagem com alert:
var nome = "Seu Nome";
alert("Olá, " + nome + "!");

// 3. Usando prompt para obter a linguagem de programação preferida:
var linguagemPreferida = prompt("Qual é a linguagem de programação que você mais gosta?");
console.log("Sua linguagem preferida é: " + linguagemPreferida);

// 4. Realizando a soma de dois valores:
var valor1 = 5;
var valor2 = 3;
var resultadoSoma = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma + ".");

// 5. Realizando a subtração de dois valores:
var valor3 = 10;
var valor4 = 4;
var resultadoSubtracao = valor3 - valor4;
console.log("A diferença entre " + valor3 + " e " + valor4 + " é igual a " + resultadoSubtracao + ".");

// 6. Verificando a idade do usuário:
var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 7. Verificando se um número é positivo, negativo ou zero:
var numero = prompt("Digite um número: ");
numero = parseFloat(numero);  // Converte a entrada para número
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 8. Usando um loop while para imprimir números de 1 a 10:
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 9. Verificando a nota e exibindo "Aprovado" ou "Reprovado":
var nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 10. Gerando um número aleatório entre 0 e 1:
var numeroAleatorio = Math.random();
console.log("Número aleatório entre 0 e 1: " + numeroAleatorio);

// 11. Gerando um número inteiro aleatório entre 1 e 10:
var numeroAleatorioInteiro = Math.floor(Math.random() * 10) + 1;
console.log("Número inteiro aleatório entre 1 e 10: " + numeroAleatorioInteiro);

// 12. Gerando um número inteiro aleatório entre 1 e 1000:
var numeroAleatorioGrande = Math.floor(Math.random() * 1000) + 1;
console.log("Número inteiro aleatório entre 1 e 1000: " + numeroAleatorioGrande);
