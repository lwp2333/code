// console.log(Array.of(undefined, 1, null)) // [ undefined, 1, null ]
const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()
console.log(iterator1.next().value)
console.log(iterator1.next().value)
for (const [index, ele] of array1.entries()) {
  console.log(index, ele)
}

const values = [1, 3, 4, 5, 6, NaN]
console.log(values.includes(NaN)) // true
console.log(values.includes(4, 3)) // false
