const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}

const selectSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let index = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    // 将位置在 index 的最小数据与位置在 i 的当前指针互换位置
    ;[arr[index], arr[i]] = [arr[i], arr[index]]
  }

  return arr
}

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
console.log(bubbleSort(arr))
console.timeEnd()

console.time()
console.log(selectSort(arr))
console.timeEnd()

console.time()
console.log(insertSort(arr))
console.timeEnd()
