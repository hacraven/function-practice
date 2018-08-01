// Write a function called "fahrenheitToCelsius" that accepts a single parameter and returns the conversion of Fahrenheit to Celsius

// Your code goes here:

function fahrenheitToCelsius(fahrenheit) {
  
    return (fahrenheit - 32) / 1.8
} 


convertFtoC(89);
convertFtoC(92);
convertFtoC(78);



// Do not touch:
// This exports your function so it can be run through our test runner. See the `/tests` directory for more information
module.exports = fahrenheitToCelsius