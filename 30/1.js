/**
 *   字符串转为驼峰
 */

const str = 'get-element-by-id'

const fn = s => {
  return s.replace(/-\w/g, function (x) {
    return x.slice(1).toUpperCase()
  })
}

console.log(fn(str))
