// 处理async函数中的错误
const fecth = require('node-fetch')
const { default: fetch } = require('node-fetch')

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    if (response.status !== 200){
        throw new Error(response.statusText)
    }
    return await response.json()
}

// getZhihuColumn('feweekly33')
//     .then(
//         column => {
//             console.log(`Name: ${column.name}`)
//             console.log(`INTRO: ${column.intro}`)
//         }
//     )
//     .catch(
//         error => {
//             console.log(`err: ${error}`)
//         }
//     )

const showColumnInfo = async id => {
    try {
        const column = await getZhihuColumn(id)
        console.log(`Name: ${column.name}`)
        console.log(`Info: ${column.intro}`)
    }
    catch (err) {
        console.error(err)
    }
}

showColumnInfo('feweekly333')

// 自己定义打出来的错误