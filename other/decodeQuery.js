const url = '?name=lwp2333&age=24&girlsFriend='

const decode = (url = '') => {
  const queryStr = url.replace(/\.*\?/, '')
  let params = {}
  queryStr.split('&').forEach(item => {
    const arr = item.split('=')
    if (arr[0] && arr[1]) params[arr[0]] = arr[1]
  })
  return params
}
