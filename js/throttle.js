const throttle = (fn, delay = 500) => {
  let flag = false
  return (...args) => {
    if (flag) return
    flag = false
    setTimeout(() => {
      fn.call(this, ...args)
      // fn.apply(this, args)
    }, delay)
  }
}
