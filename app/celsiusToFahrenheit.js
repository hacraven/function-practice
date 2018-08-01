// Write a function called "celsiusToFahrenheit" that accepts a single parameter and returns the conversion of Celsius to Fahrenheit

// Your code goes here:

function convertCtoF(celsuis){
    // conversion (C x 1.8) + 32 = F
    var fahrenheit;
        fahrenheit = (celsuis * 1.8) + 32;
        return fahrenheit;
}

convertCtoF(25);
convertCtoF(38);
convertCtoF(-20);

// function converttoF(celcius){
//     return (celsuis * 1.8) + 32;
// }



// converttoF(22)


   





// Do not touch:
// This exports your function so it can be run through our test runner. See the `/tests` directory for more information
module.exports = celsiusToFahrenheit