const { default: fetch } = require('node-fetch')

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    if (response.status !== 200){
        throw new Error(response.statusText)
    }
    return await response.json()
}

const showColumnInfo = async () => {
    // 结果放在数组里面。ES6的特性，可以直接拿变量名称接收
    const [feweekly,toolingtips] = await Promise.all([
        getZhihuColumn('feweekly'),
        getZhihuColumn('toolingtips')
    ])
    console.log(`Name: ${feweekly.name}`)
    console.log(`Info: ${feweekly.intro}`)

    console.log(`Name: ${toolingtips.name}`)
    console.log(`Info: ${toolingtips.intro}`)
}

showColumnInfo()