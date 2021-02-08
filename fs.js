const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
// const getFileHash = filePath => {
//   // 读取一个Buffer
//   const buffer = fs.readFileSync(filePath)
//   console.log(buffer)
//   const fsHash = crypto.createHash('md5')
//   fsHash.update(buffer)
//   const md5 = fsHash.digest('hex')
//   return md5
// }
// const getStreamHash = buffer => {
//   const fsHash = crypto.createHash('md5')
//   fsHash.update(buffer)
//   const md5 = fsHash.digest('hex')
//   return md5
// }
// const streamToBuffer = stream => {
//   return new Promise((resolve, reject) => {
//     let buffers = []
//     stream.on('error', reject)
//     stream.on('data', data => buffers.push(data))
//     stream.on('end', () => resolve(Buffer.concat(buffers)))
//   })
// }
// const fn = async () => {
//   const stream = fs.createReadStream('./README.md')
//   const buffers = await streamToBuffer(stream)
//   console.log(buffers)
//   console.log(getFileHash('./README.md'))
//   console.log(getStreamHash(buffers))
// }
// fn()

const hash = crypto.createHash('md5')
hash.update('lwp2333')
const defaultPassword = hash.digest('hex')
console.log(defaultPassword)

const moment = require('moment')

const log = moment('2021-12-15').format('M')

console.log(typeof log)
console.log('12' === log)

console.log(log)
