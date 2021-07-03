/**
 * typeof 出了null 其他原始类型都能判断
 */

// 基本类型
console.log(typeof 1) // number
console.log(typeof '1') // string
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol(1)) // symbol

// 对象类型
console.log(typeof {}) //object
console.log(typeof []) //object
console.log(typeof Function) //function

// 判断一个对象的正确类型，可以考虑使用instanceof

console.log({} instanceof Object) // true
console.log([] instanceof Object) // true
console.log(console.log instanceof Function) // true

//Object.prototype.toString
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call(console.log)) //[object Function]

console.log(Object.prototype.toString.call(1)) // [object Number]
console.log(Object.prototype.toString.call('1')) // [object String]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(Symbol(1))) // [object Symbol]
