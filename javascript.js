function cadastro(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let valido = true;

    // Validação do Nome
    const nome = document.getElementById("nome");
    const nomeErro = document.getElementById("nomeErro");
    if (nome.value.trim() === "") {
        nomeErro.style.display = "block";
        valido = false;
    } else {
        nomeErro.style.display = "none";
    }

    // Validação da Idade
    const idade = document.getElementById("idade");
    const idadeErro = document.getElementById("idadeErro");
    const idadeValor = idade.value.trim();
    const idadeNumero = parseInt(idadeValor);
    if (isNaN(idadeNumero) || idadeValor === "" || idadeNumero <= 0) {
        idadeErro.style.display = "block";
        valido = false;
    } else {
        idadeErro.style.display = "none";
    }

    // Validação do Sexo
    const selecaoSexo = document.getElementById("selecaoSexo");
    const sexoErro = document.getElementById("sexoErro");
    if (selecaoSexo.value === "naoValidaSexo") {
        sexoErro.style.display = "block";
        valido = false;
    } else {
        sexoErro.style.display = "none";
    }

    // Validação do Peso
    const peso = document.getElementById("peso");
    const pesoErro = document.getElementById("pesoErro");
    const pesoValor = peso.value.trim();
    const pesoNumero = parseInt(pesoValor);
    if (isNaN(pesoNumero) || pesoValor === "" || pesoNumero <= 0) {
        pesoErro.style.display = "block";
        valido = false;
    } else {
        pesoErro.style.display = "none";
    }

    // Validação da Altura
    const altura = document.getElementById("altura");
    const alturaErro = document.getElementById("alturaErro");
    const alturaValor = altura.value.trim();
    const alturaNumero = parseInt(alturaValor);
    if (alturaValor === "" || isNaN(alturaNumero) || alturaNumero <= 0) {
        alturaErro.style.display = "block";
        valido = false;
    } else {
        alturaErro.style.display = "none";
    }

    // Validação do Nível de Atividade
    const nivelAtividade = document.getElementById("nivelAtividade");
    const nivelDeAtividadeErro = document.getElementById("nivelDeAtividadeErro");
    if (nivelAtividade.value === "naoValidaAtividade") {
        nivelDeAtividadeErro.style.display = "block";
        valido = false;
    } else {
        nivelDeAtividadeErro.style.display = "none";
    }

    // Controle da Seção de Resultados
    const secaoResultados = document.getElementById("contas");

    if (valido) {
        // Cálculos (apenas se tudo for válido)
        const taxaMetabolica = document.getElementById("taxaMetabolica");
        let contaTaxaMetabolica;
        if (selecaoSexo.value === "masculino") {
            contaTaxaMetabolica = (66.47 + (13.75 * pesoNumero) + (5.003 * alturaNumero) - (6.775 * idadeNumero));
        } else { // Assume feminino
            contaTaxaMetabolica = (665 + (9.563 * pesoNumero) + (1.85 * alturaNumero) - (4.676 * idadeNumero));
        }
        taxaMetabolica.innerHTML = ("A taxa metabólica basal é: " + contaTaxaMetabolica.toFixed(2));

        const gastoCalorico = document.getElementById("gastoCalorico");
        let contaGastoCalorico;
        const fatorAtividade = {
            "sedentario": 1.2,
            "leve": 1.375,
            "moderado": 1.55,
            "muitoAtivo": 1.725,
            "extremamenteAtivo": 1.9
        };
        contaGastoCalorico = contaTaxaMetabolica * fatorAtividade[nivelAtividade.value];
        gastoCalorico.innerHTML = ("O gasto calórico diário total é: " + contaGastoCalorico.toFixed(2));

        const quantidadeAgua = document.getElementById("quantidadeAgua");
        const contaQuantidadeAgua = (pesoNumero * 0.035);
        quantidadeAgua.innerHTML = ("A quantidade ideal de água diária é: " + contaQuantidadeAgua.toFixed(2) + " litros");

        // Exibe a seção de resultados
        secaoResultados.style.display = "block";
    } else {
        // Esconde a seção de resultados se houver erro
        secaoResultados.style.display = "none";
    }
}

function calcularDeficit() {
    let valido = true;

    const perderPeso = document.getElementById("perderPeso");
    const perderPesoValor = perderPeso.value.trim();
    const perderPesoNumero = parseInt(perderPesoValor);
    const perderPesoErro = document.getElementById("perderPesoErro");

    const diasPerder = document.getElementById("diasPerder");
    const diasPerderValor = diasPerder.value.trim();
    const diasPerderNumero = parseInt(diasPerderValor);
    const diasPerderErro = document.getElementById("diasPerderErro");

    const resultadoDiasPerder = document.getElementById("resultadoDiasPerder");

    // Reseta mensagens de erro e resultado
    perderPesoErro.style.display = "none";
    diasPerderErro.style.display = "none";
    resultadoDiasPerder.style.display = "none";
    resultadoDiasPerder.innerHTML = ""; // Limpa resultado anterior

    if (isNaN(perderPesoNumero) || perderPesoValor === "" || perderPesoNumero <= 0) {
        perderPesoErro.style.display = "block";
        valido = false;
    }

    if (isNaN(diasPerderNumero) || diasPerderValor === "" || diasPerderNumero <= 0) {
        diasPerderErro.style.display = "block";
        valido = false;
    }

    if (valido) {
        const caloriasTotais = (perderPesoNumero * 7700);
        const deficitResultado = (caloriasTotais / diasPerderNumero);
        resultadoDiasPerder.innerHTML = ("O déficit calórico necessário para perder " + perderPesoNumero + "Kg em " + diasPerderNumero + " dias é: " + deficitResultado.toFixed(2) + " cal");
        resultadoDiasPerder.style.display = "block";
    }
}

function calcularDistancia() {
    let valido = true;

    // Pega o peso do formulário principal novamente
    const pesoInput = document.getElementById("peso");
    const pesoValor = pesoInput.value.trim();
    const pesoNumero = parseInt(pesoValor);
    const pesoErro = document.getElementById("pesoErro"); // Mensagem de erro do peso principal

    const distancia = document.getElementById("distancia");
    const distanciaErro = document.getElementById("distanciaErro");
    const distanciaValor = distancia.value.trim();
    const distanciaNumero = parseInt(distanciaValor);

    const resultadoDistancia = document.getElementById("resultadoDistancia");

    // Reseta mensagens de erro e resultado
    distanciaErro.style.display = "none";
    resultadoDistancia.style.display = "none";
    resultadoDistancia.innerHTML = ""; // Limpa resultado anterior
    // Reseta erro do peso caso esta função o tenha ativado
    pesoErro.style.display = "none";

    // Revalida o peso do formulário principal
    if (isNaN(pesoNumero) || pesoValor === "" || pesoNumero <= 0) {
       pesoErro.style.display = "block"; // Mostra erro no campo de peso principal
       valido = false;
    }

    if (distanciaValor === "" || isNaN(distanciaNumero) || distanciaNumero <= 0) {
        distanciaErro.style.display = "block";
        valido = false;
    }

    if (valido) {
        const contaDistancia = (distanciaNumero * pesoNumero);
        resultadoDistancia.innerHTML = ("O gasto calórico ao percorrer " + distanciaNumero + "Km é: " + contaDistancia.toFixed(2) + " cal");
        resultadoDistancia.style.display = "block";
    }
}

