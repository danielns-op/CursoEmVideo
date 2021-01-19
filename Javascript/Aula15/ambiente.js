let num = []
num.push(5, 6, 8)

console.log(`O vetor tem ${num.length} posições\nVetor: ${num}`)

num[3] = 4
num[4] = 7

console.log(`Agora o vetor tem ${num.length} posições.`)
console.log(`Vetor: ${num}`)
console.log(`Vetor organizado: ${num.sort()}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`)