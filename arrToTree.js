const array = [
  {
    id: 1,
    name: '蔬菜',
    pid: null
  },
  {
    id: 2,
    name: '土豆',
    pid: 1
  },
  {
    id: 3,
    name: '豆角',
    pid: 1
  },
  {
    id: 4,
    name: '绿豆角',
    pid: 3
  }
]
const listToTree = (list, parentKey = 'pid') => {
  list.forEach(item => {
    list.forEach(val => {
      if (val.id === item[parentKey]) {
        val.hasChild = true
        if (!val.children) {
          val.children = []
          val.treeNode = `${item.pid}-${item.id}`
        }
        item.treeNode = `${val.pid}-${item.id}`
        val.children.push(item)
      }
    })
  })
  return list.filter(item => !item[parentKey])
}

console.log(JSON.stringify(listToTree(array)))
