//Promise在ES6中体现出来是一个对象，就是说它可以直接使用，可以直接new一个Promise() 
//promise对象可以想象成容器，一般用来封装一个异步操作，异步操作时一个无法预测的事情，要么成功，要么失败
//容器内部有三个状态：
// 默认状态是pending，正在处理，要么成功resolved，要么失败rejected
// resolved 成功，已解决。如果成功就把promise状态改成成功
// rejected 驳回，失败。  如果失败就把promise状态改成失败

// 需要先new一个promise对象，然后里面需要接收一个回调处理函数，函数内部放异步操作
const fs = require('fs')

//Promise对象一经创建，立即执行里面的内容
//promise的回调处理函数传两个参数，一个是resolve，一个是reject，形参随便写ab都行
new Promise((resolve,reject) => {
    fs.readFile('promise-demo/data/1.txt',(err,data) => {
        if (err) {
            //当promise 对象内部的异步操作结果失败的时候，告诉promise对象容器，该异步任务失败了
            //其实就是将promise内部的pending状态改为reject，reject是个方法，直接调用，把错误对象传进来
            reject(err)
        } // 当代码执行到这里，说明该promise对象内部的异步操作没有发生错误，证明成功了
          //将promise内部的pending状态改为resolve，resolve是个方法，把结果data传进来。如果没有结果，则不用传参数，直接调一下
        resolve(data)
    })
})
//但是状态改完了，结果数据从哪里拿呢，err和data数据怎么拿到
// Promise实例对象有一个方法叫then,then需要传递两个回调处理函数
// 其中第一个回调处理函数就是Promise对象内部的resolve函数，接收一个参数data
// 第二个回调处理函数是可选的，如果传递就是promise对象内部的reject函数
.then((data) => {
    console.log(111)
    console.log(data.toString())
    //return 123
    return new Promise((resolve,reject) => {
        fs.readFile('promise-demo/data/2.txt',(err,data) => {
            if (err) {
                reject(err) 
                //这里没有使用return的原因是Promise的状态只能从pending变为resolve或者reject
                //状态一旦改变，就不会再发生变化，所以接下来也不会再调用resolve了
            } resolve(data)
        })
    })
},(err) =>{
    console.log('读取文件失败')
})
// 过程：当promise对象内部状态由pending改为resolve时，调用resolve(data)，然后就会调用then方法中第一个回调处理函数
// then方法之后可以继续链式调用then
// 后续的每一个then中指定的回调处理函数都会被执行。并且顺序可以保证
// 后续的then中指定的回调处理函数可以接收上一个then中指定的成功回调处理函数的返回结果
    // 1. 没有返回值，默认就是undefined
    // 2. 有普通的返回值，数字，字符串，对象，数组等，比如上面return 123，那么123自动给下面then的参数接收，data就是123
    // 3. 上一个then返回一个新的promise对象，下面data就指向上一个then返回的Promise对象的resolve
.then((data) => {
    console.log(data) //上一个then中成功回调处理函数没有返回结果，所以这个打印出来是undefined
    console.log(222)
})
.then(() => {
    console.log(333)
})

// 代码越来越多，可以把new Promise可以封装起来