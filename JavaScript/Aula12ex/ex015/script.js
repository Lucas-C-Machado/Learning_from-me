function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'assets/criança_homem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'assets/jovem_homem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'assets/adulto.png')
            } else {
                img.setAttribute('src', 'assets/idoso.png')
            }
        
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'assets/criança_mulher.png')
            } else if (idade < 21){
                img.setAttribute('src', 'assets/jovem_mulher.png')
            } else if (idade < 50){
                img.setAttribute('src', 'assets/adulta.png')
            } else {
                img.setAttribute('src', 'assets/idosa.png')
            }
        }

        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos.</strong>`
        res.appendChild(img)

    }
}