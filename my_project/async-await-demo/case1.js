const fetch = require('node-fetch')
// 请求知乎专栏，并拿到专栏详情，把专栏名称和简介打印出来
function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    fetch(url)
        .then(response => response.json())
        .then(column => {
            console.log(`Name: ${column.name}`)
            console.log(`Intro: ${column.intro}`)
        })
}

getZhihuColumn('feweekly')
// 如果把代码改的更扁平  
// 1. 加async关键字
async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)  // 2.拿到专栏数据
    // 3.把数据转成json
    column = 
    fetch(url)
        .then(response => response.json())
        .then(column => {
            console.log(`Name: ${column.name}`)
            console.log(`Intro: ${column.intro}`)
        })
}