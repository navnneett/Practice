//1 
// Create an array with the different pet types bird, cat, dog.
// Initialise it to the variable pets. Console log out pets. 

var pets = ["birs", "cat", "dog"];
console.log(pets);
console.log(pets[0]);


//2
// Create an array with the different cellphone types iphone and samsung
// and initialise it to the variable cell phones.

var cellPhones = ["iphone", "samsung"];
console.log(cellPhones);
console.log(cellPhones[1]);


//3
// Create an empty array called school programs. Then provide the elements needed
// inside the array in this specific order: computer science, business, arts.
// Then console log the school programs.

var schoolPrograms = [];

schoolPrograms[0] = "computer science";
schoolPrograms[1] = "business";
schoolPrograms[2] = "art";

console.log(schoolPrograms);


// 4
// create an empty array callels supplies.
// Then provide the elements needed inside the array in this specific order:
// erasers, <empty item>, pens, <empty item>, paper
// Then console log the supplies.

var supplies = [];

supplies[0] = "erasers";
supplies[2] = "pens";
supplies[4] = "paper";

console.log(supplies);


//5
// Create an array with the different pet types:
// bird, cat, dog
// Then remove the last item in the array using pop.
// Console log out pets.

var petTypes = ["bird", "cat", "dog"];
console.log(petTypes);

petTypes.pop();
console.log(petTypes);


//6
var dogs = new Array();

dogs[0] = "German Shepard";
dogs[1] = "Husky";
dogs[2] = "Chiwawa";

console.log(dogs);


//7
var dogs = [];

dogs[0] = "German Shepard";
dogs[1] = "Husky";
dogs[2] = "Chiwawa";

console.log(dogs);


//8
var food = [
    "Hot dog", 
    "salad", 
    "chips"
]

console.log(food);
console.log(food[1]);
console.log(food[1][2]); //grab "l" in salad


//9
var food = [
    "Hot dog", 
    "salad", 
    "chips"
]

console.log(food.toString()); //setting up the entire info to be a string of info without the quotes


//10
var food = [
    "Hot dog", 
    "salad", 
    "chips"
]

console.log(food.join(" ")); //information with only spaces


//11 - multi dimensional array
var shoppingList = [
    junkFood = ["chips", "crackers", "cookies"],
    drinks = ["coffee", "cola", "orange", "milk"]
]

console.log(shoppingList[1][2]); //grab value orange 


//12 - add two diff arrays to become one
var houseOne = ["laptop", "oven", "bed"];
var houseTwo = ["jacket", "desktop", "paper"];

var stuff = houseOne.concat(houseTwo);//grab houseOne first then add houseTwo

console.log(stuff);


// New Line Characters \n
var textOne = "Welcome to Canada";
console.log("textOne:", textOne);

var textTwo = "Welcome\nto\nCanada\n";
console.log("textTwo:", textTwo);



// Tabs (tabulars)
var textOne = "Welcome to Canada";
console.log("textOne:", textOne);

var textTwo = "Welcome\t\tto\tCanada";
console.log("textTwo:", textTwo);