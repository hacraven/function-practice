const fahrenheitToCelsius = require('../app/fahrenheitToCelsius')

describe('fahrenheitToCelsius', () => {
  it("should return the the conversion of Fahrenheit to Celsius", () => {
    expect(fahrenheitToCelsius(68)).toBe(20)
    expect(fahrenheitToCelsius(32)).toBe(0)
  })
})