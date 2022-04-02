let num = [5, 8, 2, 9, 3]
num.push(1) // colocar o valor 1 na última posição no vetor
num.sort() // organizar os valores em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // tamanho do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)


// posição 0, enquanto a pos for menor que o tamanho de num, adiciona uma pos++ para aumentar até chegar na última posição do vetor. 
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)