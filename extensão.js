function alerta() {
    alert("Olá, Mundo!");
}

function mensagem() {
    alert(" Oi quem quer que seja!");
}

function interacaoPrompt() {
    var nome = prompt("Digite seu nome:");
    if (nome) {
        alert("Olá, " + nome + "!");
    }
}

function manipularNumero() {
    var numero = document.getElementById("numero").value;
    alert("O número digitado é: " + numero);
}

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;
    var multiplicacao = num1 * num2;
    alert("A soma é: " + soma + "\nA multiplicação é: " + multiplicacao);
}

function calcularMedia() {
    var notas = document.getElementById("notas").value.split(",");
    var total = 0;
    for (var i = 0; i < notas.length; i++) {
        total += parseFloat(notas[i]);
    }
    var media = total / notas.length;
    alert("A média das notas é: " + media.toFixed(2));
}

function calculosAdicionais() {
    var numero = parseFloat(document.getElementById("numeroCalculo").value);
    alert("Raiz Quadrada: " + Math.sqrt(numero).toFixed(2) + "\nRaiz Cúbica: " + Math.cbrt(numero).toFixed(2) + "\nPotência ao Quadrado: " + Math.pow(numero, 2) + "\nPotência ao Cubo: " + Math.pow(numero, 3));
}

var contador = 0;
function aumentarContador() {
    contador++;
    document.getElementById("contador").innerText = contador;
}