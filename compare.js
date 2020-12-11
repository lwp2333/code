const str = 'scale(0.833333, 0.833333)'

let x, y
const arr = str
  .split('(')[1]
  .split(')')[0]
  .split(',')
  .map(item => Number(item))

console.log(arr)
