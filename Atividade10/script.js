function exibirMaior() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const maior = maiorEntreTres(num1, num2, num3);

    document.getElementById('resultado').innerText = "O maior número é: " + maior;
}

function ordenarCrescente() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const ordenados = [num1, num2, num3].sort((a, b) => a - b);

    document.getElementById('resultado').innerText = "Números em ordem crescente: " + ordenados.join(', ');
}

function maiorEntreTres(a, b, c) {
    return Math.max(a, b, c);
}