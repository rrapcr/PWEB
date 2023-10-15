function getEscolhaComputador() {
    const random = Math.random();
    if (random < 0.33) {
        return "pedra";
    } else if (random < 0.66) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        return "Você venceu!";
    } else {
        return "Computador venceu!";
    }
}

function jogarJogo(escolhaUsuario) {
    const escolhaComputador = getEscolhaComputador();
    const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
    
    console.log(`Você escolheu ${escolhaUsuario}.`);
    console.log(`O computador escolheu ${escolhaComputador}.`);
    console.log(`Resultado: ${resultado}`);
}

const escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura?");
jogarJogo(escolhaUsuario.toLowerCase());
