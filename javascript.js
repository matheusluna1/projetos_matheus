function cadastro(event) {
    event.preventDefault();         /*impede o envio do formulário, qnd a função não está funcionando*/

    let valido = true;

    const nome = document.getElementById("nome");
    const nomeErro = document.getElementById("nomeErro");

    if (nome.value.trim() === "") {
        nome.style.borderColor = "red";
        nomeErro.style.display = "block";
        valido = false;
    } else {
        nome.style.borderColor = "blue";
        nomeErro.style.display = "none";
    }

    const idade = document.getElementById("idade");
    const idadeErro = document.getElementById("idadeErro");

    const idadeValor = idade.value.trim();
    const idadeNumero = parseInt(idadeValor);

    if (isNaN(idadeNumero) || idadeValor === "" || idadeNumero <= 0) {
        idade.style.borderColor = "red";
        idadeErro.style.display = "block";
        valido = false;
    } else {
        idade.style.borderColor = "blue";
        idadeErro.style.display = "none";
    }

    const selecaoSexo = document.getElementById("selecaoSexo");
    const sexoErro = document.getElementById("sexoErro");

    if (selecaoSexo.value === "naoValidaSexo") {
        selecaoSexo.style.borderColor = "red";
        sexoErro.style.display = "block";
        valido = false;
    } else {
        selecaoSexo.style.borderColor = "blue";
        sexoErro.style.display = "none";
    }

    const peso = document.getElementById("peso");
    const pesoErro = document.getElementById("pesoErro");

    const pesoValor = peso.value.trim();
    const pesoNumero = parseInt(pesoValor);

    if (isNaN(pesoNumero) || pesoValor === "" || pesoNumero <= 0) {
        peso.style.borderColor = "red";
        pesoErro.style.display = "block";
        valido = false
    } else {
        peso.style.borderColor = "blue";
        pesoErro.style.display = "none";
    }

    const altura = document.getElementById("altura");
    const alturaErro = document.getElementById("alturaErro");

    const alturaValor = altura.value.trim();
    const alturaNumero = parseInt(alturaValor);

    if (alturaValor === "" || isNaN(alturaNumero) || alturaNumero <= 0) {
        altura.style.borderColor = "red";
        alturaErro.style.display = "block";
        valido = false
    } else {
        altura.style.borderColor = "blue";
        alturaErro.style.display = "none";
    }

    const nivelAtividade = document.getElementById("nivelAtividade");
    const nivelDeAtividadeErro = document.getElementById("nivelDeAtividadeErro");

    if (nivelAtividade.value === "naoValidaAtividade") {
        nivelAtividade.style.borderColor = "red";
        nivelDeAtividadeErro.style.display = "block"
        valido = false;
    } else {
        nivelAtividade.style.borderColor = "blue";
        nivelDeAtividadeErro.style.display = "none";
    }

    const taxaMetabolica = document.getElementById("taxaMetabolica");

    if (selecaoSexo.value === "masculino") {
        contaTaxaMetabolica = (66.47 + (13.75 * pesoNumero) + (5.003 * alturaNumero) - (6.775 * idadeNumero));
        taxaMetabolica.innerHTML = ("A taxa metabólica basal é: " + contaTaxaMetabolica.toFixed(2));
    } else {
        contaTaxaMetabolica = (665 + (9.563 * pesoNumero) + (1.85 * alturaNumero) - (4.676 * idadeNumero));
        taxaMetabolica.innerHTML = ("A taxa metabólica basal é: " + contaTaxaMetabolica.toFixed(2));
    }

    const gastoCalorico = document.getElementById("gastoCalorico");

    if (nivelAtividade.value === "sedentario") {
        contaGastoCalorico = (contaTaxaMetabolica * 1.2);
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));
    } else if (nivelAtividade.value === "leve") {
        contaGastoCalorico = (contaTaxaMetabolica * 1.375);
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));
    } else if (nivelAtividade.value === "moderado") {
        contaGastoCalorico = (contaTaxaMetabolica * 1.55);
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));
    } else if (nivelAtividade.value === "muitoAtivo") {
        contaGastoCalorico = (contaTaxaMetabolica * 1.725);
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));
    } else {
        contaGastoCalorico = (contaTaxaMetabolica * 1.9);
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));
    }

    const quantidadeAgua = document.getElementById("quantidadeAgua");
    contaQuantidadeAgua = (pesoNumero * 0.035);
    quantidadeAgua.innerHTML = ("A quantidade ideal de água diária é: " + contaQuantidadeAgua.toFixed(2) + " litros");

}

function calcularDeficit() {
    valido = true

    const perderPeso = document.getElementById("perderPeso");
    const perderPesoValor = perderPeso.value.trim();
    const perderPesoNumero = parseInt(perderPesoValor);
    const perderPesoErro = document.getElementById("perderPesoErro");

    const diasPerder = document.getElementById("diasPerder");
    const diasPerderValor = diasPerder.value.trim();
    const diasPerderNumero = parseInt(diasPerderValor);
    const diasPerderErro = document.getElementById("diasPerderErro");

    const resultadoDiasPerder = document.getElementById("resultadoDiasPerder");

    if (isNaN(perderPesoNumero) || perderPesoValor === "" || perderPesoNumero <= 0) {
        perderPeso.style.borderColor = "red";
        perderPesoErro.style.display = "block";
        valido = false;
    } else if (isNaN(diasPerderNumero) || diasPerderValor === "" || diasPerderNumero <= 0) {
        diasPerder.style.borderColor = "red";
        diasPerderErro.style.display = "block";
        valido = false;
    } else {
        diasPerder.style.borderColor = "blue";
        diasPerderErro.style.display = "none";
        perderPeso.style.borderColor = "blue";
        perderPesoErro.style.display = "none";
        resultadoDiasPerder.style.display = "block";
    }

    caloriasTotais = (perderPesoNumero * 7700);
    deficitResultado = (caloriasTotais / diasPerderNumero);
    resultadoDiasPerder.innerHTML = ("O déficit calórico necessário para perder " + perderPesoNumero + "Kg em " + diasPerderNumero + " dias é: " + deficitResultado.toFixed(4) + " cal");

}

function calcularDistancia() {
    let valido = true

    const peso = document.getElementById("peso");
    const pesoErro = document.getElementById("pesoErro");

    const pesoValor = peso.value.trim();
    const pesoNumero = parseInt(pesoValor);

    const distancia = document.getElementById("distancia");
    const distanciaErro = document.getElementById("distanciaErro");

    const distanciaValor = distancia.value.trim();
    const distanciaNumero = parseInt(distanciaValor);

    const resultadoDistancia = document.getElementById("resultadoDistancia");

    if (isNaN(pesoNumero) || pesoValor === "" || pesoNumero <= 0) {
        peso.style.borderColor = "red";
        pesoErro.style.display = "block";
        valido = false
    } else {
        peso.style.borderColor = "blue";
        pesoErro.style.display = "none";
    }

    if (distanciaValor === "" || isNaN(distanciaNumero) || distanciaNumero <= 0) {
        distancia.style.borderColor = "red";
        distanciaErro.style.display = "block";
        valido = false;
    } else {
        distancia.style.borderColor = "blue";
        distanciaErro.style.display = "none";
        resultadoDistancia.style.display = "block";
        const contaDistancia = (distanciaNumero * pesoNumero);
        resultadoDistancia.innerHTML = ("O gasto calórico ao percorrer " + distanciaNumero + "Km é: " + contaDistancia + " cal");
    }


}