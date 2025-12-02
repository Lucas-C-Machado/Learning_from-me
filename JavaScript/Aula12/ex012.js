/*Neste exercício criamos um relógio automático, o qual registra o
horário em que o sistema atua, sendo:

*Entre a 24/0 e as 5h - Boa madrugada!
*Entre às 6 e as 11h - Bom dia!
*Entre o 12 e às 17 - Boa tarde!
*Entre às 18 e às 23 - Boa noite!

Caso contrário - Horário inválido!*/

var agora = new Date() // Recebe a hora do sistema, o horário atual do meu PC
var hora = agora.getHours() // Aqui nós incrementamos com a informação que desejamos, ou seja, hora 

if (hora === 24) {
    hora = 0 //Se o usuário digitar 24 (Meia noite), cai no 0 (Mesma coisa )
}

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log('Horário inválido!')
}

