const FooserviceSingleton = (function () {
  function FooService() {}
  let fooService
  return {
    getInstance: function () {
      if (!fooService) {
        fooService = new FooService()
      }
      return fooService
    }
  }
})()

const foo1 = FooserviceSingleton.getInstance()

const foo2 = FooserviceSingleton.getInstance()

console.log(foo1 === foo2)
