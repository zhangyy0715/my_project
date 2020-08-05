fs = require('fs')
// 希望有一个readFile的方法，传入路径和编码，然后用then方法接收结果。————就封装这个api
readFile('promise-demo/data/11.txt','utf8')
    .then(data => {
        console.log(data)
        return readFile('promise-demo/data/2.txt','utf8')
    },err => {
        //当你对某一个环节设置了单独的异常处理函数之后，是无法阻止整体的promise处理流程执行的，还是会继续走入接下里的then里面
        console.log(err)
    })
    // 接结果
    .then(data => {
        console.log(data)
        return readFile('promise-demo/data/3.txt','utf8')
    })
    .then(data => {
        console.log(data)
    })
    // 在使用Promise做异步流程控制的时候，关于异常的处理可以通过在最后一个then之后设置一个catch，然后指定一个失败处理函数
    // 该函数可以捕获前面所有的Promise对象本身以及then内部的任务错误
    // 当前面任何一个发生异常，直接进入catch，后续所有的Promise包括then都不再执行
    .catch(err => {
        console.log(err)
    })

// 首先then只有promise实例对象能调，说明readFile内部需要返回一个实例对象

// 封装readFile方法
// ...args数组，接收数组。下面的...args，展开数组，把外部传的参数传进来，就不用指定参数个数了
function readFile(...args) {
    //直接return一个promise对象
    return new Promise((resolve,reject) => {
        fs.readFile(...args,(err,data) => {
            if(err){
                reject(err)
            } resolve(data)
        })
    })
}