// new Promise((resolve,reject) => {
//     throw new Error('fail')
// }).catch(error => {
//     console.log(error)
// })

// async function test(name){
//     let user = await 'a'
//     return user
// }
// test('uuuu')
// .then(user =>{
//     console.log(user)
// })
// .catch(err => {
//     console.log(err)
// })

// async function test(name){
//     let user = await 'a'
//     let lessons = await 'b' + user
//     return lessons // 将两个变量都放到try里，哪个发生了错误，都不能继续执行
// }

// // 调用后，正常没有出错的部分就可以用then来接收到了
// test('uuuu')
//     .then(lessons => {
//         console.log(lessons)
// })
//     .catch(err => {
//         console.log(err)
//     })

function p1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('aaaaaaaaa')
        },2000)
    })
}

function p2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('bbbbbbbb')
        },2000)
    })
}

async function test() {
    let res = await Promise.all([p1(),p2()])
    console.log(res)
}

test()