// 用 Mocha 寫測試 
// npm init
// npm install mocha chai --save-dev

// Test Case
// [Case 1]  input: 4, expect output: 4
// [Case 2] input: 6, expect output: Fizz
// [Case 3] input: 10, expect output: Buzz
// [Case 4] input: 30, expect output: FizzBuzz

let should = chai.should()
describe('FizzBuzz 測試', function () {
  it('[Case 1] input: 4 , expect output: 4', function () {
    const result = fizzBuzz(4)
    result.should.be.equal(4)
  })
  it('[Case 2] input: 6 , expect output: Fizz', function () {
    const result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('[Case 3] input: 10, expect output: Buzz', function () {
    const result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('[Case 4] input: 30, expect output: FizzBuzz', function () {
    const result = fizzBuzz(30)
    result.should.be.equal('FizzBuzz')
  })
})