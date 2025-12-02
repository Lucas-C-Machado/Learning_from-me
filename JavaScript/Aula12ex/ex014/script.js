function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    //var hora = 19 //Força o meu sistema a colocar outra hora (A fins de teste)

    if (hora >= 0 && hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = '#fdc787'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#e87e1e'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#164c72'
    }
}

