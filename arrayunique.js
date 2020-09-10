let arrayList = [
  {
    id: '1',
    name: 'one'
  },
  {
    id: '2',
    name: 'tow'
  },
  {
    id: '3',
    name: 'three'
  },
  {
    id: '4',
    name: 'one'
  },
  {
    id: '5',
    name: 'tow'
  },
  {
    id: '6',
    name: 'three'
  }
]

/**
 * reduce
 */

function unique(arr, u_key) {
  let obj = {}
  return arr.reduce((prev, next) => {
    obj[next[u_key] + typeof next[u_key]] ? '' : (obj[next[u_key] + typeof next[u_key]] = true && prev.push(next))
    return prev
  }, [])
}

/**
 * map +forEach
 */
function unique2(arr, u_key) {
  let map = new Map()
  arr.forEach(item => {
    if (!map.has(item[u_key])) {
      map.set(item[u_key], item)
    }
  })
  return [...map.values()]
}

console.log(unique2(arrayList, 'name'))