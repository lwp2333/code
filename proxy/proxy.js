let target = {
    name: 'sbf',
    sex: 'man',
    age: '23'
}
let proxy = new Proxy(target,{
    get(target,key,receiver){
        console.log(typeof key)
        if(key in receiver) {
            return Reflect.get(target,key,receiver)
        }
        throw new TypeError(key + '属性不存在')
    },
    set(target,key,value,receiver){
        if(key[0]==='_'){
            return false
        }
        return Reflect.set(target,key,value,receiver)
    }
})

// console.log(proxy.name)
// console.log(proxy.age2)
// console.log(proxy[0])
proxy.father = 'lwp'
console.log(proxy)