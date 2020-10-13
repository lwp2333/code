// console.log(undefined === null)

// console.log([].toString())
// console.log({}.toString())

let obj = new Object({
  lwp: 'lwp2333'
})
console.log(typeof obj)
console.log(obj instanceof Object)
console.log(obj.__proto__)
console.log(obj.constructor.prototype)
console.log(Object.getPrototypeOf(obj))
