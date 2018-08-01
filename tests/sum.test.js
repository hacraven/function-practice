const sum = require('../app/sum')

describe('Sum', () => {
  it("should return the sum of it's parameters", () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(4, 6)).toBe(10)
  })

  it("should handle negative numbers", () => {
    expect(sum(-1, 2)).toBe(1)
    expect(sum(-4, 6)).toBe(2)
  })
})