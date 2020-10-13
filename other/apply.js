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

