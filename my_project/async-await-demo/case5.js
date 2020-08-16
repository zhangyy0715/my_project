// async function get(name) {
//     return await '历史'
// }

// get('zhangyuyin').then(subj => {
//     console.log(subj)
// })

// let get = async function(name) {
//     return await '历史'
// }

// get('zhangyuyin').then(subj => {
//     console.log(subj)
// })

// let test = {
//     async get(name) {
//         return await '政治'
//     }
// }

// test.get('lisi').then(subj => {
//     console.log(subj)
// })

class Subject {
    async get(name) {
        return await 'hhhh'
    }
}
new Subject().get('777').then(subj => {
    console.log(subj)
})