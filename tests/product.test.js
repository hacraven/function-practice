const product = require('../app/product')

describe('Product', () => {
  it("should return the product of it's parameters", () => {
    expect(product(1, 2)).toBe(2)
    expect(product(12, 5)).toBe(60)
  })

  it("should handle negative numbers", () => {
    expect(product(-1, 2)).toBe(-2)
    expect(product(-12, 3)).toBe(-36)
  })
})