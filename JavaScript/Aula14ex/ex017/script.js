function tabuada() {

    // Declarando as variáveis
    var numero = document.getElementById('numero');
    var tabuada = document.getElementById('tabuada');

    // Verifica se o usuário informou os dados corretamente
    if (numero.value.length == 0) {
        window.alert('Erro! Não foi informado o número.');
    } else {
        // Limpa o conteúdo anterior
        tabuada.innerHTML = `Tabuada do número ${numero.value}: <br>`;

        // Conversão de string para número
        var n = Number(numero.value);

        // Gerando a tabuada
        for (var c = 1; c <= 10; c++) {
            tabuada.innerHTML += `\u{1F449} ${n} x ${c} = ${n * c} <br>`;
        }
    }
}