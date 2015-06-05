/********************* ##Celsius to Fahrenheit##****************************************

Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. 

**Formula:**

°C  x  9/5 + 32 = °F
(°F  -  32)  x  5/9 = °C

**Example: **

37°C x  9/5 + 32 = 98.6°F
37°C = 98.6°F************************************************************************/

// Converting temperature from celsius to fahrenheit
var celsius = prompt('Please type in temprature in Celsius:');
var toFarenheit = Math.round(parseInt(celsius, 10) * 9/5 + 32, 2);

message = celsius + " degrees C is " + toFarenheit + " degrees F!" + "<br><br>";
document.write(message);

// Converting temperature from fahrenheit to celsius
var farenheit = prompt('Please type in temprature in Farenheit:');
var toCelsius = Math.round(( parseInt(farenheit, 10) - 32 ) * 5/9, 2);

message = farenheit + " degrees F is " + toCelsius + " degrees C!";
document.write(message);




























