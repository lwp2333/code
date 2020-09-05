/**
 * number转bool
 * 除了0、-0、NaN都为true
 */

console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false

// 其他
console.log(Boolean(1.1)) // true
console.log(Boolean(-1.1)) // true

/**
 * string 转bool
 * 除了空串都为true
 */

console.log(Boolean('')) // false
console.log(Boolean(' ')) // true

/**
 * undefined，null 为false
 */

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false

/**
 * 引用类型 为true
 */

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(() => {}))
console.log(Boolean(function () {})) // true

if ([]) {
  console.log('[]:true')
}
if ([].length > 0) {
  console.log('[].length>0:false')
}

/**
 * array转string
 */

console.log(String([]) === '') // true, 空数组转string，为空串
console.log([].toString() === '') // true, 空数组转string，为空串

console.log(String([1, 2, 3])) // 1,2,3
console.log([1, 2, 3].join()) // 1,2,3

/**
 * string转number
 */

console.log(Number('')) // 0
console.log(Number('1')) // 1
console.log(Number('a')) // NaN

/**
 * array 转number
 */

// 1.空数组转number 为0

console.log(Number([])) // 0
console.log(Number([1])) // 1
console.log(Number([1, 2, 3])) // NaN

// ==不像===那样严格，对于一般情况，只要值相等，就返回true，但==还涉及一些类型转换，它的转换规则如下：
// 两边的类型是否相同，相同的话就比较值的大小，例如1==2，返回false
// 判断的是否是null和undefined，是的话就返回true
// 判断的类型是否是String和Number，是的话，把String类型转换成Number，再进行比较
// 判断其中一方是否是Boolean，是的话就把Boolean转换成Number，再进行比较
// 如果其中一方为Object，且另一方为String、Number或者Symbol，会将Object转换成字符串，再进行比较

console.log(1 == 2) // false
console.log(undefined == null) // true
console.log(1 == '1') // true
console.log('1' == 1) //true
console.log(false == 0) // true
console.log(false == 1) // false
console.log(true == 0) // false
console.log(true == 1) // true

console.log({ a: 1 } == '[object Object]') //true
