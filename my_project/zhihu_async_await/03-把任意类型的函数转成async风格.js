const fetch = require('node-fetch') 
// const  getZhihuColumn = async id => {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url)
//     // 把数据转成json
//     const column = await response.json() 
//     // 打印出专栏的名称和简介
//     return column
//     // return await response.json()
// }

// // 使用async函数把调用函数代码简化成扁平结构的例子
// // 全局作用域(代码底作用域)使用async是非法的，需要声明一个匿名的async函数，并且马上执行
// (async () => {
//     const column = await getZhihuColumn('feweekly')
//     console.log(`Name: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
// })()

// 类中使用async方法

class APIClient {
    async getColmn(id) {
        const url  =  `https://zhuanlan.zhihu.com/api/columns/${id}`
        const response = await fetch(url)
        return await response.json()
    }
}

(async () => {
    const client = new APIClient()
    const column = await client.getColmn('feweekly')
    console.log(`Name: ${column.name}`)
    console.log(`INTRO: ${column.intro}`)
})()