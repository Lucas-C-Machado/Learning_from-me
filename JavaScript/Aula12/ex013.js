var agora = new Date() 
var diaSem = agora.getDay() // Dia da semana


diaSem = 9 // Aqui seria para forçar o valor. Forçar o erro
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

    OBS: Para o JS ele entende assim os dias da semana!
*/

console.log(`O dia de hojé é ${diaSem}!`) // Apenas para o usuário se identar no código

switch (diaSem){ //Se quer trabalhar com intervalos (Escolha o if), ele não permite essa diferenciação
    case 0: 
        console.log(`O dia da semana é Domingo!`)
            break //Se eu tirar o break forçadamente de TODOS os cases e selecionar um
                  //Ele vai pegar  do 0 (Exemplo) e vai mostrar na tela TODOS os valores, do 0 até o último
    
    case 1:
        console.log(`O dia da semana é Segunda-Feira!`)
            break

    case 2: 
        console.log(`O dia da semana é Terça-Feira!`)
            break

    case 3: 
        console.log(`O dia da semana é Quarta-Feira!`)
            break

    case 4: 
        console.log(`O dia da semana é Quinta-Feira!`)
            break

    case 5: 
        console.log(`O dia da semana é Sexta-Feira!`)
            break

    case 6: 
        console.log(`O dia da semana é Sábado!`)
            break

    default:
        console.log('[ERRO] Dia da semana inválido!')
            break
}