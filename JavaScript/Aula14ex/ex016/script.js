function contar(){

    //Declarando as variáveis
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    //Verifica se o usuário informou os dados corretamente
    if (inicio.value.length == 0){
        window.alert('Erro! Não foi informado o início.')
    } else if (fim.value.length == 0){
        window.alert("Erro! Não foi informado o fim.")
    } else if (passo.value.length == 0){
        window.alert("Erro! Não foi informado o passo.")
    } else{
        res.innerHTML = 'Contando: '
    }

    //Conversão de string para número
    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)

    //Verifica se o passo foi informado corretamente
    if (passo <= 0){
        window.alert('Passo inválido! Considerando passo 1')
        passo = 1
    }

    //Contagem
    if (inicio < fim){
        //Contagem crescente
        for (var c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c} \u{1F449}`
        }
    } else{
        //Contagem decrescente
        for (var c = inicio; c >= fim; c -= passo){
            res.innerHTML += `${c} \u{1F449}`
        }
    }

    res.innerHTML += `\u{1F3C1}`
}