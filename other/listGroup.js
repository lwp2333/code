let input = [
  {
    name: '海淀',
    tempeture: 20,
    hour: 11
  },
  {
    name: '海淀',
    tempeture: 18,
    hour: 10
  },
  {
    name: '昌平',
    tempeture: 20,
    hour: 11
  },
  {
    name: '昌平',
    tempeture: 18,
    hour: 10
  }
]
/** 数据分组
 * {
 * "海淀": [{tempeture: 6, hour: 00}, {tempeture: 6, hour: 01}, .....],
 * "昌平": [{tempeture: 6, hour: 00}, {tempeture: 6, hour: 01}, .....],
 * }
 */
function groupBy(data, key = 'name') {
  if (!Array.isArray(data)) {
    return false
  }
  return data.reduce((pre, cur) => {
    if (!pre[cur[key]]) {
      pre[cur[key]] = []
    }
    pre[cur[key]].push(cur)
    return pre
  }, {})
}

console.log(groupBy(input, 'name'))
