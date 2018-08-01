const difference = require('../app/difference')

describe('Difference', () => {
  it("should return the difference of it's parameters", () => {
    expect(difference(2, 1)).toBe(1)
    expect(difference(6, 4)).toBe(2)
  })

  it("should handle negative numbers", () => {
    expect(difference(-1, 2)).toBe(-3)
    expect(difference(-4, 6)).toBe(-10)
  })
})