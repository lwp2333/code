class EventEmitter {
  constructor() {
    this._events = this._events || new Map() // 储存事件/回调键值对
    this._maxListeners = this._maxListeners || 10 // 设立监听上限
  }
}
// 触发名为type的事件
EventEmitter.prototype.emit = function (type, ...args) {
  const handler = this._events.get(type)
  if (!handler) return false
  if (Array.isArray(handler)) {
    // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
    handler.forEach(item => {
      args.length ? item.apply(this, args) : item.call(this)
    })
  } else {
    // 单个函数的情况我们直接触发即可
    args.length ? handler.apply(this, args) : handler.call(this)
  }
  return true
}

// 监听名为type的事件
EventEmitter.prototype.addListener = function (type, fn) {
  const handler = this._events.get(type) // 获取对应事件名称的函数清单
  if (!handler) {
    this._events.set(type, fn)
  } else if (handler && typeof handler === 'function') {
    // 如果handler是函数说明只有一个监听者
    this._events.set(type, [handler, fn]) // 多个监听者我们需要用数组储存
  } else {
    handler.push(fn) // 已经有多个监听者,那么直接往数组里push函数即可
  }
}

EventEmitter.prototype.removeListener = function (type, fn) {
  const handler = this._events.get(type) // 获取对应事件名称的函数清单

  // 如果是函数,说明只被监听了一次
  if (handler && typeof handler === 'function') {
    this._events.delete(type, fn)
  } else {
    // 如果handler是数组,说明被监听多次要找到对应的函数
    const postion = handler.findIndex(item => item === fn)
    // 如果找到匹配的函数,从数组中清除
    if (postion !== -1) {
      // 找到数组对应的位置,直接清除此回调
      handler.splice(postion, 1)
      // 如果清除后只有一个函数,那么取消数组,以函数形式保存
      if (handler.length === 1) {
        this._events.set(type, handler[0])
      }
    } else {
      return this
    }
  }
}

const bus = new EventEmitter()

bus.addListener('msg', console.log)
bus.addListener('msg', function (...args) {
  console.log('msg:', ...args)
})

bus.emit('msg', '你好！')
bus.emit('msg', '你好！')
bus.emit('msg', '对对子1！')
bus.removeListener('msg')
bus.emit('msg', '对对子2！')
