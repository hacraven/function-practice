const quotient = require('../app/quotient')

describe('Quotient', () => {
  it("should return the quotient of it's parameters", () => {
    expect(quotient(1, 2)).toBe(.5)
    expect(quotient(12, 6)).toBe(2)
  })

  it("should handle negative numbers", () => {
    expect(quotient(-1, 2)).toBe(-.5)
    expect(quotient(-12, 3)).toBe(-4)
  })
})