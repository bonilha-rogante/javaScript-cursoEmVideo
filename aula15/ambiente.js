let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7)
//num.length
//num.sort()
console.log(`Nosso vetor é o ${num}`)
//console.log(num.length)
/*for (let pos = 0; pos < num.length; pos++) {
  console.log(num[pos])
}
*/

let pos = num.indexOf(1)
if (pos == -1) {
  console.log('O valor não foi encontrado')
} else {
  console.log(pos)
}
