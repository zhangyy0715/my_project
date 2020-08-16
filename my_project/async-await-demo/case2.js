const fecth = require('node-fetch')

async function getZhihuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fecth(url)
    console.log({status : response.status})
    if (response.status != 200) {
        throw new Error(response.statusText)
    }
}