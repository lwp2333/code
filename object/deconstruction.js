let data = {
  name: 'lwp2333',
  age: '24',
  address: {
    TownName: '金盘岭镇'
  }
}
const {
  address: { TownName }
} = data

console.log(TownName)

const fn = function ({name, age,address:{TownName}}) {
  console.log(`${name}的年龄为${age},出生在${TownName}`)
}

fn(data)
