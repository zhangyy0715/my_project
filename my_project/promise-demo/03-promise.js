fs = require('fs')
// 希望有一个readFile的方法，传入路径和编码，然后用then方法接收结果。————就封装这个api
readFile('promise-demo/data/1.txt','utf8')
    .then(data => {
        console.log(data)
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

//接下来读完1，读2，再读3

readFile('promise-demo/data/1.txt','utf8')
    .then(data => {
        console.log(data)
        return readFile('promise-demo/data/2.txt','utf8')
    })
    // 接结果
    .then(data => {
        console.log(data)
        return readFile('promise-demo/data/3.txt','utf8')
    })
    .then(data => {
        console.log(data)
    })