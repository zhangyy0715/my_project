const assert = require('assert')
const sum = require('../hello')

describe('#hello.js', () => {
    describe('#sum()', () => {
        before(() => {
            console.log('runs before all tests in this block')
        })
        after(() =>{
            console.log('runs after all tests in this block')
        })
        beforeEach(() => {
            console.log('runs before each test in this block')
        })
        afterEach(() => {
            console.log('runs after each test in this block')
        })
        it('sum() should return 0',() => {
            assert.strictEqual(sum(),0)
        })
        it('sum(1) should return 1',() => {
            assert.strictEqual(sum(1),1)
        })
        it('sum(1,2) should return 3',() => {
            assert.strictEqual(sum(1,2),3)
        })
        it('sum(1,2,3) should return 6',() => {
            assert.strictEqual(sum(1,2,3),6)
        })
    })
})