const arr = [undefined, null, '', 0, { nameL: 'lwp' }, 128, [1, 2], function () {}]

// console.log(arr.protoType())

// function a() {
//   console.log('1')
// }

// var a = function () {
//   console.log('2')
// }

// a()

// const filterArr = arr.filter(item => item)

// console.log(filterArr)

const arr2 = [...new Array(100).keys()]

// console.log(arr2.splice(80, 20)) // 返回截取的数组，并改变自身
console.log(arr2.slice(80, 100))

console.log(arr2)

const a = () => {}
const res = Object.prototype.toString.call(a)
console.log(res)


