const assert = require('assert')
const hello = require('../async')

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        
        it('#test async function', async() =>{
            let r = await hello()
            assert.strictEqual(r,15)
        })
    })
})