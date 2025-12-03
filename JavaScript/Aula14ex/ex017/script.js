// Escape HTML special characters in a string
function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");
}

function tabuada() {

    // Declarando as variáveis
    var numero = document.getElementById('numero');
    var tabuada = document.getElementById('tabuada');

    // Verifica se o usuário informou os dados corretamente
    if (numero.value.length == 0) {
        window.alert('Erro! Não foi informado o número.');
    } else {
        // Limpa o conteúdo anterior
        tabuada.innerHTML = `Tabuada do número ${escapeHTML(numero.value)}: <br>`;

        // Conversão de string para número
        var n = Number(numero.value);

        // Gerando a tabuada
        for (var c = 1; c <= 10; c++) {
            tabuada.innerHTML += `\u{1F449} ${escapeHTML(n.toString())} x ${c} = ${escapeHTML((n * c).toString())} <br>`;
        }
    }
}