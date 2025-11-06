// Soma Simples
function somar(soma1, soma2) {
    return soma1 + soma2;
}

somar(3, 5);
console.log(`A função SOMAR é igual a: ${somar(7, 6)}`)


// Multiplicação Simples
function multiplicar(mult1, mult2) {
    return mult1 * mult2;
}

console.log(`\nA função MULTIPLICAR é igual a: ${multiplicar(2, 4)}`)


// Subtração Simples
function subtrair(sub1, sub2) {
    return sub1 - sub2;
}

console.log(`\nA função subtrair é igual a: ${subtrair(10, 5)}`)


// Divisão com Verificação de Zero
function dividir(div1, div2) {
    if (div2 === 0) {
        return "Erro: Divisão por Zero.";
    }
    return div1 / div2;
}

console.log(`\nA função DIVIDIR é igual a: ${dividir(8, 2)}`)
console.log(`\nA função DIVIDIR é igual a: ${dividir(3, 0)}`)


// Calculadora de Média
function calcularMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

console.log(`\nA função CALCULAR MÉDIA é igual a: ${calcularMedia(10, 4, 8, 6)}`)


// Exponenciação
function elevarPotencia(pot1, pot2) {
    return Math.pow(pot1, pot2);
}

console.log(`\nA função ELEVAR POTÊNCIA é igual a: ${elevarPotencia(2, 3)}`)


// Área de um Retângulo
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

console.log(`\nA função CALCULAR ÁREA DO RETÂNGULO é igual a: ${calcularAreaRetangulo(8, 10)}`)


// Par ou Ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Número informado é PAR.";
    } else {
        return "Número informado é ÍMPAR.";
    }
}

console.log(`\nA função VERIFICAR PAR OU ÍMPAR verificou que: ${verificarParOuImpar(3)}`)
console.log(`\nA função VERIFICAR PAR OU ÍMPAR verificou que: ${verificarParOuImpar(2)}`)


// Raiz Quadrada
function calcularRaizQuadrada(raiz1) {
    return Math.sqrt(raiz1);
}   

console.log(`\nA função RAIZ QUADRADA é igual a: ${calcularRaizQuadrada(25)}`);

// Cálculo de Hipotenusa
function calcularHipotenusa(cateto1, cateto2) {
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}

console.log(`\nA função CALCULAR HIPOTENUSA é igual a: ${calcularHipotenusa(3, 4)}`);