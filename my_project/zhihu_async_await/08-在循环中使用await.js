// 循环里串行
const fetch = require('node-fetch')

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    if (response.status !== 200){
        throw new Error(response.statusText)
    }
    return await response.json()
}

// const showColumnInfo = async () => {
//     console.time(showColumnInfo)
//     names = ['feweekly','toolingtips']
//     for (const name of names) {
//         const column = await getZhihuColumn(name)
//         console.log(`Name: ${column.name}`)
//         console.log(`Intro: ${column.intro}`)
//     }
//     console.timeEnd(showColumnInfo)
// }

// showColumnInfo()

// 如果更快呢？可以先触发所有请求，然后拿到promise的数组，然后等待里面的结果resolve
const showColumnInfo = async () => {
    console.time(showColumnInfo)

    const names = ['feweekly','toolingtips']
    const promises = names.map(x => getZhihuColumn(x))
    for (const promise of promises) {
        const column = await promise
        console.log(`Name: ${column.name}`)
        console.log(`Intro: ${column.intro}`)
    }
    console.timeEnd(showColumnInfo)
}

showColumnInfo()

//  快了