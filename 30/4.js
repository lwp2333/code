// 栗子：
// var d = 'abc'
// function a() {
//   console.log('函数a')
// }
// console.log(a) // ƒ a(){ console.log("函数a"); }
// a() // '函数a'
// var a = '变量a'
// console.log(a) // '变量a'
// a() // a is not a function
// var c = 123

// 输出结果及顺序：
// ƒ a(){ console.log("函数a"); }
// '函数a'
// '变量a'
// a is not a function

// 栗子预编后相当于：
// function a() {
//   console.log('函数a')
// }
// var d
// console.log(a) // ƒ a(){ console.log("函数a"); }
// a() // '函数a'

// a = '变量a' // 此时变量a赋值，函数声明被覆盖

// console.log(a) // "变量a"
// a() // a is not a function

function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
