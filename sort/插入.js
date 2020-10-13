/**
 * 2. 插入排序
 * 插入排序同样使用两层循环，以升序排序为例：外层循环维护了一个指针 i，
 * 它从第二条数据开始向右移动。内层循环则维护一个指针 j 从 i 的位置开始向左移动，
 * 若 j 左边的数据比 j 大，则将左边的数据右移一格，直到遇到 j 左边的数据比 j 小，就停止移动，
 * 并把最开始用于比较的 i 上的数据插入到这一位置。如此反复，
 * 可以保证每次内循环结束，i 左边的数据都是有序的，则执行完外循环即可完成排序。
 */

const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    let curr = arr[i]
    while (j > 0 && arr[j - 1] > curr) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = curr
  }

  return arr
}

let arr = Array.from({ length: 10000 }, v => Math.floor(Math.random() * 100))
console.time()
console.log(insertSort(arr))
console.timeEnd()
