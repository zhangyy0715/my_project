// async function main() {
//     // await 后面通常跟promise，但是也可以不跟promise（隐式：await Promise.resolve(890)）
//     const number = await 890
//     console.log(number)
// }

// main()

// await可以和带有promise或这then方法的库一起使用，让代码更简洁
const bluebird = require('bluebird')
async function main() {
    console.log('waiting...')
    // 调用bluebird的一个方法，类似于sleep
    await bluebird.delay(2000)
    console.log('done!')
}

main()