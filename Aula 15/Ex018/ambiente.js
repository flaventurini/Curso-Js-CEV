let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(10)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Busca de valores dentro do array
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

pos = num.indexOf(4)
if (pos == -1 ) {
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor está na posição ${pos}`)
}
