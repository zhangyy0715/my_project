
// const fecth = require('node-fetch')
const { default: fetch } = require('node-fetch')

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    if (response.status !== 200){
        throw new Error(response.statusText)
    }
    return await response.json()
}

// const showColumnInfo = async id => {
//     try {
//         // 串行的，等待第一个请求结束后，发起第二个代码
//         const feweekly = await getZhihuColumn('feweekly')
//         const toolingtips = await getZhihuColumn('toolingtips')

//         console.log(`Name: ${feweekly.name}`)
//         console.log(`Info: ${feweekly.intro}`)

//         console.log(`Name: ${toolingtips.name}`)
//         console.log(`Info: ${toolingtips.intro}`)
//     }
//     catch (err) {
//         console.error(err)
//     }
// }

const showColumnInfo = async id => {
    try {
        // 并行的，发起请求是同时，但是拿到数据是要等待的
        const feweeklyPromise = getZhihuColumn('feweekly')
        const toolingtipsPromise = getZhihuColumn('toolingtips')
        const feweekly = await feweeklyPromise
        const toolingtips = await toolingtipsPromise

        console.log(`Name: ${feweekly.name}`)
        console.log(`Info: ${feweekly.intro}`)

        console.log(`Name: ${toolingtips.name}`)
        console.log(`Info: ${toolingtips.intro}`)
    }
    catch (err) {
        console.error(err)
    }
}

showColumnInfo()