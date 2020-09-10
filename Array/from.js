const obj = {
  0: '123',
  1: '456',
  2: 'c',
  length: 4
}

/**
 * 1.类数组对象，含有.length属性的对象
 */

console.log(obj.length)

console.log(Array.from(obj)) // ['123', '456', 'c', 'undefined']

/**
 * Array.from(list, fn)
 */

const values = [1, 1, 3, 5]

console.log(Array.from(values, item => item * 2))