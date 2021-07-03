/**
 * instanceof 机制
 *  是否为右方实例（左边原型链是否出现过右边的原型prototype）
 */

function instanceOf(instanceObject, classFunc) {
  let classFuncProtoType = classFunc.prototype
  let proto = instanceObject.__proto__
  // 优化版 取得当前实例对象的原型链上的属性
  // let proto = Object.getPrototypeOf(instanceObject)
  while (true) {
    if (proto === null) return false
    if (proto === classFuncProtoType) return true
    proto = proto.__proto__ // 沿着原型链一层层往上找
    // 优化版
    // proto = Object.getPrototypeOf(proto)
  }
}

function person(name) {
  this.name = name
  function sayName() {
    console.log(this.name)
  }
}
const a = new person('lwp')
const b = new person('kunkun')
console.log(a instanceof person)
console.log(instanceOf(b, person))
let name = 'lep'
console.log(a)
console.log(b)
