const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const bool = arr.some(item => {
//   console.log(item)
//   return item >= 2
// })

// const bool2 = arr.every(item => {
//   console.log(item)
//   return item >= 0
// })
// const arr2 = arr.slice(0, 2)
// console.log(arr2)

// console.log(arr)

// arr.splice(0, 2)
// console.log(arr)

// console.log(bool)
// console.log(bool2)

/**
 *  判断数组中是否包含某个值
 */

// 1. indexOf 返回索引下标
console.log(arr.indexOf(8)) // 存在返回下标 7
console.log(arr.indexOf(0)) // 不存在返回-1

// 2.includes，是否包含 true，false

console.log(arr.includes(8)) // true
console.log(arr.includes(0)) // false

// 3. find

const find = arr.find(item => item === 1)

console.log(find) // 存在则返回满足的值 1

const find2 = arr.find(item => item === 0)

console.log(find2) // 不存在返回 undefined

// 4. findIndex
const find3 = arr.findIndex(item => item === 1)

console.log(find3) // 存在则返回满足的值的下标

const find4 = arr.findIndex(item => item === 0)

console.log(find4) // 不存在返回 -1
