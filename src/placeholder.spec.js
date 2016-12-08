const add = require('./placeholder')

describe('Given a placeholder file', () => {
  it('Should add two numbers together', () => {
    expect(add(2,3)).to.equal(5)
  })
})
