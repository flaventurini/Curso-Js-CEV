let valores = [8, 1, 7, 4, 2, 9]

// primeira opção, clássica

for (let i = 0; i < valores.length; i++) {
  console.log(`A posição ${i} tem o valor ${valores[i]}`)
}


// segunda opção, mais moderna

let num = [8, 1, 7, 4, 2, 9]

for (let j in num) {
  console.log(`A posição ${j} tem o valor ${num[j]}`)
}