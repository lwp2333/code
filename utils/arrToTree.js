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
const listToTree = (list, id = 'id', parentKey = 'pid') => {
  list.forEach(item => {
    list.forEach(val => {
      if (val[id] === item[parentKey]) {
        if (!val.children) {
          val.children = []
        }
        val.children.push(item)
      }
    })
  })
  return list.filter(item => !item[parentKey])
}

// console.log(JSON.stringify(listToTree(array)))

let list = [
  { AREA_NAME: '浙江省', level: 0, PID: 0, AREA_CODE: 330000 },
  { AREA_NAME: '杭州市', level: 1, PID: 330000, AREA_CODE: 330100 },
  { AREA_NAME: '宁波市', level: 1, PID: 330000, AREA_CODE: 330200 },
  { AREA_NAME: '温州市', level: 1, PID: 330000, AREA_CODE: 330300 },
  { AREA_NAME: '嘉兴市', level: 1, PID: 330000, AREA_CODE: 330400 },
  { AREA_NAME: '湖州市', level: 1, PID: 330000, AREA_CODE: 330500 },
  { AREA_NAME: '上城区', level: 2, PID: 330100, AREA_CODE: 330102 },
  { AREA_NAME: '下城区', level: 2, PID: 330100, AREA_CODE: 330103 },
  { AREA_NAME: '江干区', level: 2, PID: 330100, AREA_CODE: 330104 }
]
function treeData(data) {
  let cloneData = JSON.parse(JSON.stringify(data))
  return cloneData.filter(parent => {
    //AREA_CODE 代表id   PID代表 父级 pid
    let branchArr = cloneData.filter(child => parent['AREA_CODE'] == child['PID'])
    branchArr.length > 0 ? (parent['children'] = branchArr) : ''
    return parent['PID'] == 0
  })
}

console.log(JSON.stringify(treeData(list)))
