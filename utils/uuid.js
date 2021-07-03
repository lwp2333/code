// const generateUUID = () => {
//   let d = new Date().getTime()
//   //   if (window.performance && typeof window.performance.now === 'function') {
//   //     d += performance.now() //use high-precision timer if available
//   //   }
//   const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
//     let r = (d + Math.random() * 16) % 16 | 0
//     d = Math.floor(d / 16)
//     return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
//   })
//   return uuid
// }

// const uuid = generateUUID()
// console.log(uuid)

let ratio = Infinity
let ratio2 = NaN

console.log(Object.is(ratio, -Infinity))
console.log(Object.is(ratio2, NaN))

if (0) {
  console.log(1111)
}
