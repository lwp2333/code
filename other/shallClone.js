/**
 * 浅克隆，只拷贝对象、数组的第一层内容，其他的还是引用
 */

const shallClone = target => {
  if (target === null) return null
  if (typeof target !== 'object') return target
  const cloneTarget = Array.isArray(target) ? [] : {}
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      // 便利对象自身可枚举属性
      cloneTarget[prop] = target[prop]
    }
  }
  return cloneTarget
}

/**
 * 简单情况深克隆
 */

const deepClone = target => {
  if (target === null) return null
  if (typeof target !== 'object') return target

  const cloneTarget = Array.isArray(target) ? [] : {}
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop])
    }
  }
  return cloneTarget
}
