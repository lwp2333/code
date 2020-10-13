/**
 * 1. 创建一个func的实例对象（实例.__proto__ = .prototype）
 * 2. 把func 当成普通函数执行，改变this指向
 * 3. 分析函数返回值
 */

function myNew(Func, ...args) {
  // let obj = {};
  // obj.__proto__ = Func.prototype;
  // 创建一个Func的实例对象（实例.____proto____ = 类.prototype）
  let obj = Object.create(Func.prototype)

  let result = Func.call(obj, ...args)

  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result
  }
  return obj
}

let str = {
  name: 'lwp'
}
let str2 = new String()
let str3 = myNew(String)
console.log(str2)
