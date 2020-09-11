// let foo = {
//   bar: function () {
//     return this.baz
//   },
//   baz: 1
// }
// console.log(typeof (f = foo.bar)())

// console.log(undefined + 2)

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

function ArrayFlat(data) {
  if (!Array.isArray(data)) return false
  return data.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? ArrayFlat(cur) : cur)
  }, [])
}

console.log(ArrayFlat(arr))
