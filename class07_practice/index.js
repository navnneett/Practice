// 15-2 Write the function to call the initialised function in one line. The function should be 
// called myShoppingList. Call the variable shopping. Have the first value be 12 then the second value
// be 4. Multiply quantity time price in the function. Return the answer. Then console log 
// the value below the function. Add the answer as a comment. Write a comment above the function 
// to describe it. 


var shopping = myShoppingList(12,4);

/**
 * @desc Figuring out the cost of shopping list
 * @param {*} quantity the quantiy of items
 * @param {*} price the price of the items 
 * @returns returning the total cost of shopping 
 */
function myShoppingList(quantity, price) {
    return quantity * price;
};

console.log(shopping); //48



//6-5-2 Initialise the variable addition to a function called
// adition function with the values 3 and 4. Add the two numbers. 
// Console log the variable addition afterwards.
// Then the answer on the same line as the console log using //.

var addition = additionFunction(3,4);

/**
 * @desc addition function to add number number together
 * @param {*} numOne teh first value
 * @param {*} numTwo the second value
 * @returns the addition of the first and second value
 */
function additionFunction(numOne, numTwo) {
    return numOne + numTwo;
};

console.log(addition); //7



//6-5-3 Initialise the variable subtraction to a function called
// subtraction function with the values 10 and 4. Subtract 4 from 10. 
// Console log the variable subtraction afterwards.
// Then the answer on the same line as the console log using //.

var subtraction = subtractionFunction(10,4);

/**
 * @desc subtraction function 
 * @param {*} numOne the first value
 * @param {*} numTwo the second value
 * @returns the subtracted value of numTwo from numOne
 */
function subtractionFunction(numOne, numTwo) {
    return numOne - numTwo;
};

console.log(subtraction); //6



//6-5-2 Initialise the variable divide to a function called
// divide function with the values 12 and 4. Calculate 12 divided by 4 in the function created. 
// Console log the variable divide afterwards.
// Then the answer on the same line as the console log using //.

var divide = divideFunction(12,4);

/**
 * @desc the divide function
 * @param {*} valueOne the first value
 * @param {*} valueTwo the second value
 * @returns the first value that is divided by the second value
 */
function divideFunction(valueOne, valueTwo) {
    return valueOne / valueTwo;
};

console.log(divide); //3



// Example 5
var x = myFunction(5,6);

/**
 * @desc function that multiplies
 * @param {*} a  the first value
 * @param {*} b the second value
 * @returns the multiplied value of a and b
 */
function myFunction(a, b) {
    return a * b;
};

var d = 5;
var z = addingFive(x,d);

/**
 * @desc adding the two values
 * @param {*} g the first value
 * @param {*} h the second value
 * @returns the multiplied value of a and b
 */
function addingFive(g,h) {
    return g + h;
};

console.log(z);



//Example 8
// Initailise a function called sentenceFunction that takes in the name and age. 
// This will return sentence.
// My name is _name_ and I am _age_ years old. 
// Write a variable called person one and make it equal to
// the sentenceFunction that has the values George Smith and 25.
// Then console log out person one. 

function sentenceFunction(name, age) {
    return "My name is " + name + " and I am " + age + " years old.";
};

var personOne = sentenceFunction("Geroge Smith", 25);

console.log(personOne);



// Example 9 

var firstName = nameFix("george")
var personOne  = sentenceFunction(firstName,25);

/**
 * @desc creating the sentence
 * @param {*} firstName teh first name of the person
 * @param {*} age the age in years
 * @returns the sentence containing the first name and age
 */
function sentenceFunction(firstName, age) {
    return "My name is " + firstName + " and I am " + age + " years old.";
};

/**
 * @desc to format the name with the first letter capitalized
 * @param {*} first the first name of the person
 * @returns the first letter of the name as capitalized
 */
function nameFix(first) {
    return first[0].toUpperCase() + first.substring(1);
};

console.log(personOne);

