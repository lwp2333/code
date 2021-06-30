const promisesAll = (promises) =>
  new Promise(async (resolve, reject) => {
    const result = []
    let flagIndex = 0
    const len = promises.length
    for (let i in promises) {
      promises[i].then(res => {
        result[i] = res
        flagIndex++
        if (flagIndex === len) {
          resolve(result)
        }
      })
        .catch(err => {
          reject(err)
        })
    }
  })

const fn = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功01')
  }, 3000)
})

const fn2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('失败02')
  }, 3000)
})

const getAllData = async () => {
  const res = await promisesAll([fn, fn2]).catch(err => {
    console.log('err', err)
  })
  console.log(res)
}

getAllData()