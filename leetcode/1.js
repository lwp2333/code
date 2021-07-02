/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 链接：https://leetcode-cn.com/problems/3sum
 */

const list = [...new Array(2000).keys(), -5]

// 1. 暴力枚举
const fn = (arr, target = 0) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === target) {
        return [j, i]
      }
    }
  }
}

// 2. 记录每个差值 ，及index
const fn2 = (arr, target = 0) => {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(arr[i], i)
  }
}

console.time()
console.log(fn2(list))
console.timeEnd()
