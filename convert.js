// let ossUrl = 'http://lwp2333.oss-cn-beijing-internal.aliyuncs.com/a07484f12a200d6a2c3653b760fbb66d.jpg'

// ossUrl = ossUrl.replace('-internal', '')
// console.log(ossUrl)

/** 过滤出 想要的除分页参数外，额外有效的参数属性 */
const params = {
  pageSize: 10,
  pageNum: 1,
  name: 'lwp2333',
  age: 24,
  sex: '男',
  notValidIJnfo: 123456,
  ddwdw: 'dwdwd',
  dwdwdw: null
}
const validList = ['name', 'age', 'sex', 'dwdwdw']
const { pageSize, pageNum, ...other } = params

const filterValidParams = (params, validList) => {
  let data = {}
  validList.forEach(item => {
    params[item] && (data[item] = params[item])
  })

  return data
}

const validParams = filterValidParams(params, validList)

console.log(validParams)
