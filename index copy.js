/**
 * String formatting
 */
// Curly Brace / Backticks `${}`
// Example 1

var age = 40;
console.log(`I am ${age} years old.`);

//Example 2
var heightCentimeters = 160;
var sentence = `I am ${heightCentimeters}cm tall.`;
console.log(sentence);

// Concatenation +
// Example 3
var age = 40;
console.log("I am " + age + " years old.");

// Example 4
var heightCentimeters = 160;
console.log("I am " + heightCentimeters + " cm tall.");

// Double Quotes ""
// Example 5
var person = "Tom";
console.log("Hi my name is " + person + ".");

// Example 6
var location = "alaska";
console.log("I live in " + location.charAt(0).toUpperCase() + location.slice(1));

// Single Quotes
// Example 7
var person = 'Tom';
console.log('Hi my name is ' + person + ".");

// Example 8
var location = 'alaska';
console.log('I live in ' + location.charAt(0).toUpperCase() + location.slice(1) + '.');


// Format Specifiers

// Example 9 - string
var petName = "Joe";
console.log("My pets name is %s.", petName);

// Example 10 - integer
var year = 2023;
console.log("The building was built in %d.", year);

// Example 11 - float
var grade = 3.2;
console.log("My GPA is %f.", grade);