const fetch = require('node-fetch')
// // 一、请求知乎专栏，并拿到专栏详情，把专栏名称和简介打印出来
// function getZhihuColumn(id) {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     fetch(url)
//         .then(response => response.json())
//         .then(column => {
//             console.log(`Name: ${column.name}`)
//             console.log(`Intro: ${column.intro}`)
//         })
// }
// getZhihuColumn('feweekly')


// // 二、如果把代码改的更扁平  
// // 1. 加async关键字
// async function getZhihuColumn(id) {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url)  // 2.拿到专栏数据
//     // 3.把数据转成json
//     column = await response.json()
//     // 4.打印出专栏的名称和简介
//     console.log(`Name: ${column.name}`)
//     console.log(`Intro: ${column.intro}`)
// }
// getZhihuColumn('feweekly')

// // 三、返回return，然后在调用async时当成promise使用，使用then
// async function getZhihuColumn(id) {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url) 
//     column = await response.json()
//     // 1.return 
//     return column
//     // 还可以更简洁，直接 return await response.json()
// }
// // 光标放到函数上的时候可以明显看到返回的是一个promise值
// getZhihuColumn('feweekly')
//     // 2.用then接收
//     .then(column => {
//         console.log(`Name: ${column.name}`)
//         console.log(`Intro: ${column.intro}`)
//     })

// // 四、箭头函数和aysnc关键字结合
// const getZhihuColumn = async id => {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url) 
//     return await response.json()
// }

// getZhihuColumn('feweekly')
//     .then(column => {
//         console.log(`Name: ${column.name}`)
//         console.log(`Intro: ${column.intro}`)
//     })



// // 五、设置async函数表达式，然后执行它
// (async () => {
//     const column = await getZhihuColumn('feweekly')
//     console.log(`Name: ${column.name}`)
//     console.log(`Intro: ${column.intro}`)
// })()

// 六、在类的函数上面使用async await
class APIClient {
    // 声明一个函数getColumn，在方法前面声明async关键字，然后下面使用它
    async getColumn(id) {
        const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
        const response = await fetch(url) 
        return await response.json()
    }
}
// 在对象上声明async的时候可以类似在类上声明async方法
(async () => {
    const client = new APIClient()
    const column = await client.getColumn('feweekly')
    console.log(`Name: ${column.name}`)
    console.log(`Intro: ${column.intro}`)
})()