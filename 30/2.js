/**
 * 查找字符串出现最多的
 */

const str = 'abbcccddddd'

const rankMap = str.split('').reduce((pre, cur) => {
  if (!pre[cur]) {
    pre[cur] = 1
  }
  pre[cur]++
  return pre
}, {})

console.log(rankMap)
let max = 0
let maxKey = null
for (const key in rankMap) {
  if (rankMap[key] > max) {
    max = rankMap[key]
    maxKey = key
  }
}
console.log(max)
console.log(maxKey)
