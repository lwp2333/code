/**
 * 3.选择排序
 * 选择排序的原理，以升序排序为例，就是从数组的开头开始，
 * 用第一条数据和其他数据进行比较，取其中最小的数据，
 * 与第一个位置的数据交换，再用第二条数据对后面的数据进行比较......如此反复，
 * 当在数组的倒数第二位上执行完这个比较，整个排序就完成了。
 * 与冒泡排序一样，选择排序也采用了两层循环，
 * 但选择排序在每次遍历中只进行了一次数据位置的交换，因此它的速度比冒泡排序要快的多。
 *
 */

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

let arr = Array.from({ length: 10000 }, v => Math.floor(Math.random() * 100))
console.time()
console.log(selectSort(arr))
console.timeEnd()
