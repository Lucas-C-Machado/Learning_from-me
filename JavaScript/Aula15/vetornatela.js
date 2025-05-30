var valores = [5, 8, 2, 3, 7]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

// Faz com que o texto seja digitado com os valores de acordo com a "posição" dos elementos
/*
for (var pos = 0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Maneira mais SIMPLIFICADA, lendo:
// Para cada posição em num eu vou mostrar o num pos
for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}