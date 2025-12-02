/*Exercício onde nós realizamos um sistema de votos nno Brasil
de forma que:

Quem tem abaixo de 16 anos - NÃO vota;

Quem tem entre 16 e 17 anos - Voto OPCIONAL

Quem tem idade >= a 18 - Voto OBRIGATÓRIO

Quem tem idade > 66 anos - Voto OPCIONAL*/

var idade = 67

console.log (`Você tem ${idade} anos.`)

if (idade < 16){
    console.log('Não vota')
} else if (idade < 18){
        console.log('Voto opcional')
}  else if (idade > 66){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}