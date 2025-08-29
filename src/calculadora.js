function somarDoisNumeros(valor1, valor2) {
    const resultadoSomaDoisNumeros = valor1 + valor2;
    return resultadoSomaDoisNumeros;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    //Soma entre dois valores
    const resultadoSomaDoisValores = somarDoisNumeros(valor1, valor2);

    //Divisão entre dois valores
    const resultadoMediaDoisValores = resultadoSomaDoisValores / 2;

    //Retornar resultado
    return resultadoMediaDoisValores;
}

module.exports = {
    somarDoisNumeros
}