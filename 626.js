console.log(typeof null) // object
console.log(typeof undefined) //undefined

console.log(Array.isArray([])) // true
console.log([] instanceof Array) // true
console.log([].constructor === Array) // true
console.log(Object.prototype.toString.call([])) //[object Array]

const fn = async () => {
  return 1
}

const fn2 = () => {
  return Promise.resolve(1)
}
console.log(fn())
console.log(fn2())
