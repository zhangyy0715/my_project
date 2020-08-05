const fs = require('fs')

//读1，2，3的顺序是不保证的
fs.readFile('promise-demo/data/1.txt',(err,data) => {
    console.log(data.toString())
})

fs.readFile('promise-demo/data/2.txt',(err,data) => {
    console.log(data.toString())
})

fs.readFile('promise-demo/data/3.txt',(err,data) => {
    console.log(data.toString())
})

//将2套到1里，3套到2里，就可以保证执行顺序了，只有1读到了，它的回调函数才会执行（去读2）
fs.readFile('promise-demo/data/1.txt',(err,data) => {
    console.log(data.toString())
    fs.readFile('promise-demo/data/2.txt',(err,data) => {
        console.log(data.toString())
        fs.readFile('promise-demo/data/3.txt',(err,data) => {
            console.log(data.toString())
        })
    })
})

//但是以上代码嵌套太多，如果要解决需要用到promise解决异步回调，函数嵌套

