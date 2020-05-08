// const scores = [
//   { score: 90, subject: 'chinese', weight: 0.6 },
//   { score: 95, subject: 'math', weight: 0.3 },
//   { score: 85, subject: 'english', weight: 0.1 }
// ]
// const result = scores.reduce((t, v) => t + v.score * v.weight,0) // 90.5

/** 代替reserve */
// function reserve(...val) {
//   return val.reduceRight((t, v) => (t.push(v), t), [])
// }
// console.log(reserve(1, 2, 3, 4, 5, 6))

/**数组去重 */
// function Uniq(arr = []) {
//   return arr.reduce((t, v) => (t.includes(v) ? t : [...t, v]), [])
// }
// const arr = [2, 1, 0, 3, 2, 1, 2]
// console.log(Uniq(arr)) // [2, 1, 0, 3]

/**数组最大值与最小值 */
function Max(arr = []) {
  return arr.reduce((t, v) => (t > v ? t : v))
}
function Min(arr = []) {
  return arr.reduce((t, v) => (t < v ? t : v))
}
console.log(Max([1, 2, 3, 4]))
console.log(Min([1, 2, 4, 5, 6]))
