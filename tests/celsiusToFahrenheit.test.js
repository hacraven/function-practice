const celsiusToFahrenheit = require('../app/celsiusToFahrenheit')

describe('celsiusToFahrenheit', () => {
  it("should return the the conversion of Celsius to Fahrenheit", () => {
    expect(celsiusToFahrenheit(20)).toBe(68)
    expect(celsiusToFahrenheit(60)).toBe(140)
  })
})