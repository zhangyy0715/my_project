const fs = require('fs')

// module.exports = async () => {
//     let expression = await fs.readFile('./data.txt','utf-8',(err,data) =>{
//         console.log('done')
//     })
//     let fn = new Function('return' + expression)
//     let r = fn()
//     console.log(`Calculate: ${expression} = ${r}`)
//     return r
// }

fun = async () => {
    let expression = await fs.readFile('./data.txt','utf-8',(err,data) => {
        if (err) {
            console.log(err)
        } else {
            return data
        }
    })
    console.log('expression:',expression)
    let fn = new Function( 'return ' +expression)
    console.log('fn:',fn)
    let r = fn()
    console.log('r:',r)
    console.log(`Calculate: ${expression} = ${r}`)
    return r
}

fun()