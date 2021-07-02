const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    // 异步回调队列
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = value => {
      if (this.status !== PENDING) return
      this.status = FULFILLED
      this.value = value
      // 依次运行对应的函数执行
      this.onResolvedCallbacks.forEach(fn => fn())
    }
    let reject = reason => {
      if (this.status !== PENDING) return
      this.status = REJECTED
      this.reason = reason
      // 依次运行对应的函数执行
      this.onRejectedCallbacks.forEach(fn => fn())
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  static resolve(value) {
    // 如果传入的是 promise 就直接返回
    return value instanceof myPromise
      ? value
      : new myPromise(resolve => {
          resolve(value)
        })
  }
  static reject(reason) {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
  }
}

myPromise.prototype.then = function (onFulFilled, onRejected) {
  onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : err => {
          throw err
        }
  const promiseAgain = new myPromise((resolve, reject) => {
    if (this.status === FULFILLED) {
      // 创建一个微任务等待 promise2 完成初始化
      queueMicrotask(() => {
        try {
          // 获取成功回调函数的执行结果
          const x = onFulFilled(this.value)
          // 传入 resolvePromise 集中处理
          resolvePromise(promiseAgain, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (this.status === REJECTED) {
      // 创建一个微任务等待 promise2 完成初始化
      queueMicrotask(() => {
        try {
          // 调用失败回调，并且把原因返回
          const x = onRejected(this.reason)
          // 传入 resolvePromise 集中处理
          resolvePromise(promiseAgain, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (this.status === PENDING) {
      // 等待
      // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
      // 等到执行成功失败函数的时候再传递
      this.onResolvedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            // 获取成功回调函数的执行结果
            const x = onFulFilled(this.value)
            // 传入 resolvePromise 集中处理
            resolvePromise(promiseAgain, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
      this.onResolvedCallbacks.push(() => {
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = onRejected(this.reason)
            // 传入 resolvePromise 集中处理
            resolvePromise(promiseAgain, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
    }
  })
  return promiseAgain
}

function resolvePromise(promiseAgain, x, resolve, reject) {
  // 如果promise ===x  执行 reject，错误原因为 TypeError
  if (promiseAgain === x) {
    reject(new TypeError('The promise and the return value are the same'))
  }
  // x 为函数/对象
  if (typeof x === 'object' || typeof x === 'function') {
    if (x === null) {
      return resolve(x)
    }
    let then
    try {
      // 把 x.then 赋值给 then
      then = x.then
    } catch (error) {
      return reject(error)
    }
    // 如果x then 是函数
    if (typeof then === 'function') {
      let called = false

      try {
        then.call(
          x,
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          y => {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量 called
            if (called) return
            called = true
            resolvePromise(promiseAgain, y, resolve, reject)
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          r => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (error) {
        // 如果调用 then 方法抛出了异常 error：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
        if (called) return
        // 否则以 error 为据因拒绝 promise
        reject(error)
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x)
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x)
  }
}

// 执行 A+ 测试

myPromise.deferred = function () {
  let result = {}
  result.promise = new myPromise(function (resolve, reject) {
    result.resolve = resolve
    result.reject = reject
  })

  return result
}

myPromise
  .resolve()
  .then(() => {
    console.log(0)
    return myPromise.resolve(4)
  })
  .then(res => {
    console.log(res)
  })

myPromise
  .resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })
module.exports = myPromise
