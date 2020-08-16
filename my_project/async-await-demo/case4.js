class User {
    // 3.构造函数，传参数，改变对象的属性
    constructor(name){
        this.name = name
    }
    then(resolve,reject){
        // 4. 需要resolve来改变状态，然后后续才能根据状态执行输出结果
        // let user = '4444'
        resolve(this.name)
    }
}

async function get() {
    // 5. 此时这个实例已经调用then方法，并且用resolve将状态改变了，并用user来接收了变量，最后可以输出
    let user = await new User('李四')  // 1.User()会调用then方法
    console.log(user) // 2.没有改变状态，所以不会被打印出来，只有在上面类中改变状态才会打印出
}

get()

