/**
 *  数组扁平化
 */

let arr = [1, [2, [3, [4, 5]]], 6]
const str = JSON.stringify(arr)
console.log(str)

//  1. Es6 flat

const arrFlat = arr.flat(Infinity)
// console.log(arrFlat)

// 数组序列化加正则替换加分割

const arrFlat2Str = str.replace(/(\[|\])/g, '')

const arrFlat2 = arrFlat2Str.split(',').map(item => Number(item))
// console.log(arrFlat2)
const arrFlat3 = JSON.parse('[' + arrFlat2Str + ']')
// console.log(arrFlat3)

// 函数递归
let result = []
const flatFn = arr => {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatFn(item)
    } else {
      result.push(item)
    }
  })
}
flatFn(arr)
// console.log(result)

// 利用reduce 迭代

const flatReduce = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatReduce(cur) : cur)
  }, [])
}

// console.log(flatReduce(arr))

// 扩展运算符
console.log(arr)
while (arr.some(Array.isArray)) {
  arr = [].concat(...arr)
}
console.log(arr)
