var num = [4, 8, 2, 9, 3]

num.push(1) //Acresenta o valor 7 a última posição do array, sem que eu me preocupe em saber qual que é
num.sort() //Pega todos os números e os coloca em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //Tamanho do array
console.log(`O primeiro valor do vetor é ${num[0]}`) //Acresecenta o valor 6 a TERCEIRA posição do array

var pos = num.indexOf(8) // O valor 8 existe? Está em qual posição?

if (pos == -1){
    console.log(`O valor -1 NÃO existe!!!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

console.log(`O valor 8 está na posição ${pos}`)