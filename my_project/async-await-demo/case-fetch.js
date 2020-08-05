//npm install node-fetch
const fecth = require('node-fetch')

fecth('https://www.baidu.com?a=1&b=2',{
    method: 'GET'
})
    .then(res => res.text())
    .then(json => console.log(json))