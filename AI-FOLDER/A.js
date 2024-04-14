// Declares a variable num and assigns it a value of 10.
const num=10;
// Declares another variable isEven and assigns it a boolean
//  value indicating whether num is even or odd
const isEven=num%2===0;
//Prints the value of num and whether it is even or odd to the console.
if(isEven){
    console.log(`Number ${num} is Even hence divisible by 2.`);
}
else{
    console.log(`Number ${num} is Odd hence not divisible by 2.`);
}




const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("John"));



function fetchData(callback) {
    // Simulate fetching data asynchronously
    setTimeout(function() {
        const data = "dfghjk,vcxzdfghnjmcx";
        callback(data);
    }, 1000);
}
fetchData(function(data) {
    console.log("Data fetched:", data);
});




//Closure
function outer() {
    const message = "Hello, My name is Jim";
    function inner() {
        console.log(message);
    }
    return inner;
}
const fn = outer();
fn(); // Output: "Hello"



// Conditional Statement:
// Switch Statement:
const color = "red";
switch (color) {
    case "red":
        console.log("The color is red.");
        break;
    case "green":
        console.log("The color is green.");
        break;
    default:
        console.log("Unknown color.");
}


//for in
const person = {
    name: "John",
    age: 30,
    gender: "male"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}

//for of
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}


//error handling
try {
    // Code that may cause an error
    const result = 10/ 0;
    console.log(result);
} catch (error) {
    // Handle the error
    console.log("An error occurred:", error.message);
}



//Higher-Order Functions:
function operation(func, x, y) {
    return func(x, y);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(operation(add, 5, 3)); // Output: 8
console.log(operation(subtract, 5, 3)); // Output: 2




//Nested Conditional Statements:
const age = 21;
if (age >= 18) {
    if (age < 21) {
        console.log("You're an adult, but you can't drink.");
    } else {
        console.log("You're an adult and can drink.");
    }
} else {
    console.log("You're a minor.");
}





//Looping Arrays:
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Looping Strings:
var str = "Hello";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
