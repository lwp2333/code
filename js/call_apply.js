/**
 * 1.将函数设为对象的属性
 * 2.执行&删除这个函数
 * 3.指定this到函数并传入给定参数执行函数
 * 4.如果不传入参数，默认指向为 window
 */

Function.prototype.call = function (context, ...args) {
  context = context === null ? window : context
  let contextType = typeof context
  if (!/^(object| function)&/i.test(contextType)) {
    context = Object(context)
  }
  let result
  context['fn'] = this
  result = context['fn'](...args)
  delete context['fn']
  return result
}

/**
 * 1.context 要改变的函数中的this指向，写谁就是谁
 * 2. args，传递给函数的实参
 * 3. this 要处理的函数fn
 */

Function.prototype.apply = function (context, args) {
  context = context === null ? window : context
  let contextType = typeof context
  if (!/^(object| function)&/i.test(contextType)) {
    context = Object(context)
  }
  let result
  context['fn'] = this
  result = context['fn'](args)
  delete context['fn']
  return result
}

const list = [1, 2, 3, 4]

const res = [].push.call(list, 5, 6, 7, 8)

console.log(list)
