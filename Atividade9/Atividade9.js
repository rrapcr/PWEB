
const idades = [];
const opinioes = [];
const generos = { masculino: 0, feminino: 0 };

for (let i = 1; i <= 45; i++) {
    const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`), 10);
    const sexo = prompt(`Digite o sexo da pessoa ${i} (M para masculino, F para feminino):`);
    const opiniao = parseInt(prompt(`Digite a opinião da pessoa ${i} (Ótimo=4, Bom=3, Regular=2, Péssimo=1):`), 10);

    idades.push(idade);
    opinioes.push(opiniao);

    if (sexo.toLowerCase() === 'm') {
        generos.masculino++;
    } else if (sexo.toLowerCase() === 'f') {
        generos.feminino++;
    }
}

const somaIdades = idades.reduce((total, idade) => total + idade, 0);
const mediaIdade = somaIdades / idades.length;


const idadeMaisVelha = Math.max(...idades);
const idadeMaisNova = Math.min(...idades);


const quantidadePessimo = opinioes.filter(opiniao => opiniao === 1).length;

const porcentagemOtimoBom = ((opinioes.filter(opiniao => opiniao === 3 || opiniao === 4).length) / opinioes.length) * 100;

console.log(`Média de idade: ${mediaIdade}`);
console.log(`Idade da pessoa mais velha: ${idadeMaisVelha}`);
console.log(`Idade da pessoa mais nova: ${idadeMaisNova}`);
console.log(`Quantidade de pessoas que responderam "Péssimo": ${quantidadePessimo}`);
console.log(`Porcentagem de pessoas que responderam "Ótimo" e "Bom": ${porcentagemOtimoBom.toFixed(2)}%`);
console.log(`Número de mulheres: ${generos.feminino}`);
console.log(`Número de homens: ${generos.masculino}`);