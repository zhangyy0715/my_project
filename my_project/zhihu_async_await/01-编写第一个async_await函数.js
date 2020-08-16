// const fetch = require('node-fetch')

// function getZhihuColumn(id) {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     fetch(url)
//         .then(response => response.json())
//         .then(column => {
//             console.log(`Name: ${column.name}`)
//             console.log(`INTRO: ${column.intro}`)
//         })
// }

// getZhihuColumn('feweekly')

// 把代码改的更加扁平

const fetch = require('node-fetch')

// async function getZhihuColumn(id) {
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url)
//     // 把数据转成json
//     const column = await response.json() 
//     // 打印出专栏的名称和简介
//     console.log(`Name: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
// }

// getZhihuColumn('feweekly')

// 使用async返回值，返回一个promise，然后在调用的时候直接通过then来取数据
async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    // 把数据转成json
    const column = await response.json() 
    // 打印出专栏的名称和简介
    return column
    // return await response.json()
}

getZhihuColumn('feweekly')
    .then(column => {
        console.log(`Name: ${column.name}`)
        console.log(`INTRO: ${column.intro}`)
    })

