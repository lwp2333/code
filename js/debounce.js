const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
      // fn.apply(this, args)
    }, delay)
  }
}

const log = (a, b, c) => {
  console.log(`${a},${b},${c}`)
}

const fnWithDebounce = debounce(log, 3000)

fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce()
fnWithDebounce(1, 2, 3)
