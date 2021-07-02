let target = [
  {
    name: 'lwp'
  }
]
let proxy = new Proxy(target, {
  get(target, key, receiver) {
    if (key in receiver) {
      return Reflect.get(target, key, receiver)
    }
    throw new TypeError(key + '属性不存在')
  },
  set(target, key, value, receiver) {
    console.log('通知更新')
    return Reflect.set(target, key, value, receiver)
  }
})

// console.log(proxy)

proxy[0].name = 'zz'

console.log(proxy)
