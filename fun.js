const fn = (...arguments) => {
  return Array.from(arguments).reduce((pre, cur) => pre + cur)
}

console.log(fn(1, 2, 3))
console.log(fn(1, 2, 3, 4, 5))
