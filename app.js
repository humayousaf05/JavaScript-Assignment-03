// // practice 5.1

// // Set the starting counter to 0
// let counter = 0;

// // Create a variable, step, to increase your counter by
// let step = 10;

// // Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
// do {
//     console.log(counter);
//     counter += step;
// } while (counter < 100);


// // practice 5.2

// // Create a variable to be used as the max value for the number guessing game
// let maxValue = 5;

// // Generate a random number for the solution
// let solution = Math.floor(Math.random() * maxValue) + 1;
// console.log("Solution:", solution); // Comment out or remove this line in the final version

// // Create a variable for tracking whether the answer is correct
// let isCorrect = false;

// // Use a while loop to iterate a prompt asking the user to enter a number between 1 and maxValue
// while (!isCorrect) {
//     // Prompt the user for a guess and convert the response into a number
//     let userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`));

//     // Check if the user's guess is equal to the solution
//     if (userGuess === solution) {
//         // Set the status to true and break out of the loop
//         isCorrect = true;
//         alert("Congratulations! Your guess is correct!");
//     } else {
//         // Provide feedback and continue the loop
//         if (userGuess > solution) {
//             alert("Too high! Try again.");
//         } else {
//             alert("Too low! Try again.");
//         }
//     }
// }


// // practice 5.3
// // Setup a blank array, myWork
// let myWork = [];

// // Using a for loop, create a list of 10 objects
// for (let i = 1; i <= 10; i++) {
//     // Use a ternary operator to alternate true/false status for every other item
//     let status = i % 2 === 0 ? false : true;

//     // Create a lesson using a temporary object variable
//     let tempLesson = {
//         name: 'Lesson ' + i,
//         status: status
//     };

//     // Push the objects to the myWork array
//     myWork.push(tempLesson);
// }

// // Output the array to the console
// console.log(myWork);



// // practice 5.4

// // Create an empty array to hold the table data
// let myTable = [];

// // Set variable values for the number of rows and columns
// let numRows = 4;
// let numColumns = 3;

// // Set up a counter variable with an initial value of 0
// let counter = 0;

// // Create a for loop to construct each row of the table
// for (let i = 0; i < numRows; i++) {
//     // Set up a new temporary array to hold each row of data
//     let tempTable = [];

//     // Nest a second loop within the first to count the columns
//     for (let j = 0; j < numColumns; j++) {
//         // Increment the main counter each iteration of the inner loop
//         counter++;

//         // Push the counter values to the temporary array
//         tempTable.push(counter);
//     }

//     // Push the temporary array to the main table
//     myTable.push(tempTable);
// }

// // Output into the console with console.table(myTable)
// console.table(myTable);


// // practice 5.5

// // Create a grid array variable
// let grid = [];

// // Set a value of 64 for the number of cells
// let numberOfCells = 64;

// // Set a counter to 0
// let counter = 0;

// // Create a global variable to be used for the row array
// let row = [];

// // Create a loop that will iterate up to the number of cells + 1
// for (let i = 0; i <= numberOfCells; i++) {
//     // Add an outer if statement to check if the counter is divisible by 8 (number of columns)
//     if (counter % 8 === 0) {
//         // Inside the preceding if statement, add another if statement to check if the row is undefined
//         if (row !== undefined) {
//             // Add the row to the main grid array
//             grid.push(row);
//         }
//         // Clear the row array if the counter is divisible by 8
//         row = [];
//     }

//     // Set up a temporary variable to hold the value of the counter and push it to the row array
//     let temp = counter++;
//     row.push(temp);

//     // Check if the value of the counter is equal to the total number of columns
//     if (temp === 8) {
//         // Add the current row to the grid
//         grid.push(row);
//     }
// }

// // Output the grid into the console
// console.log(grid);


// // practice 5.6

// // Create an empty array
// let myArray = [];

// // Run a loop 10 times, adding a new incrementing value to the array
// for (let i = 1; i <= 10; i++) {
//     myArray.push(i);
// }

// // Log the array into the console
// console.log('Array:', myArray);

// // Use the for loop to iterate through the array and output into the console
// console.log('\nUsing for loop:');
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// // Use the for...of loop to output the value into the console from the array
// console.log('\nUsing for...of loop:');
// for (let value of myArray) {
//     console.log(value);
// }


// // practice 5.7

// // Create a simple object with three items
// let myObject = {
//     name: 'Huma',
//     age: 19,
//     city: 'Karachi'
// };

// // Using the for...in loop to get properties' names and values from the object
// console.log('Object Properties and Values:');
// for (let key in myObject) {
//     console.log(`${key}: ${myObject[key]}`);
// }

// // Create an array containing the same three items
// let myArray = ['Alice', 30, 'Los Angeles'];

// // Using the for loop to output values from the array
// console.log('\nArray Values:');
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }



// // practice 5.8

// // Set up a string variable to use as output
// let output = '';

// // Select a number to skip
// let numberToSkip = 5;

// // Create a for loop that counts to 10
// for (let i = 1; i <= 10; i++) {
//     // Add a condition to check if the value should be skipped
//     if (i === numberToSkip) {
//         // Using continue to skip the current iteration
//         continue;
//     }

//     // Append the new count value to the end of the main output variable
//     output += i;
// }

// // Output the main variable after the loop completes
// console.log('Using continue:', output);

// // Reuse the code, but change continue to break
// output = '';

// // Create a for loop that counts to 10
// for (let i = 1; i <= 10; i++) {
//     // Add a condition to check if the value should be skipped
//     if (i === numberToSkip) {
//         // Using break to stop the loop when the skip value is encountered
//         break;
//     }

//     // Append the new count value to the end of the main output variable
//     output += i;
// }

// // Output the main variable after the loop completes
// console.log('Using break:', output);


// chapter project

//1. Set up a blank array to contain the final multiplication table
// 2. Set a value variable to specify how many values you want to multiply with
// one another and show the results for.
// 3. Create an outer for loop to iterate through each row and a temp array to store
// the row values. Each row will be an array of cells that will be nested into the
// final table.
// 4. Add an inner for loop for the column values, which will push the multiplied
// row and column values to the temp array.
// 5. Add the temporary row data that contains the calculated solutions to the
// main array of the final table. The final result will add a row of values for the
// calculations.


// let multiplicationTable = [];

// let valuesToMultiply = 10;

// for (let i = 1; i <= valuesToMultiply; i++) {

//     let tempRow = [];

//     for (let j = 1; j <= valuesToMultiply; j++) {
//         tempRow.push(i * j);
//     }

//     multiplicationTable.push(tempRow);
// }

// for (let i = 0; i < multiplicationTable.length; i++) {
//     console.log(multiplicationTable[i].join("\t"));
// }


// practice 6.1
// // 1. Create a function that adds two numbers
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// // 2. Set up two different variables with two different values
// const firstNumber = 5;
// const secondNumber = 7;

// // 3. Use your function on the two variables and output the result
// console.log("Result of first call:", addNumbers(firstNumber, secondNumber));

// // 4. Create a second call to the function using two more numbers
// const thirdNumber = 10;
// const fourthNumber = 3;

// console.log("Result of second call:", addNumbers(thirdNumber, fourthNumber));


// practice 6.2

// // 1. Create an array of descriptive words
// const descriptiveWords = ["awesome", "creative", "adventurous", "kind", "brilliant"];

// // 2. Create a function that contains a prompt asking the user for a name
// function describeName() {
//     // Prompt user for a name
//     const userName = prompt("Enter a name:");

//     // 3. Select a random value from the array using Math.random
//     const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
//     const randomAdjective = descriptiveWords[randomIndex];

//     // 4. Output into the console the prompt value and the randomly selected array value
//     console.log(`The name ${userName} is ${randomAdjective}!`);
// }

// // 5. Invoke the function
// describeName();

// practice 6.3

// 1. Set up two variables containing number values
// const firstNumber = 8;
// const secondNumber = 4;

// // 2. Set up a variable to hold an operator, either + or -
// let operator = '+';

// // 3. Create a function that retrieves the two values and the operator string value within its parameters
// function calculateValues(num1, num2, operation = 'add') {
//     if (operation === 'subtract') {
//         return num1 - num2;
//     } else {
//         return num1 + num2;
//     }
// }

// // 4. Within console.log(), call the function using your variables and output the response to the console
// console.log(`Result of operation (${operator}):`, calculateValues(firstNumber, secondNumber, operator));

// // 5. Update the operator value to be the other operator type - either plus or minus
// operator = '-';
// // Call the function again with the new updated arguments
// console.log(`Result of operation (${operator}):`, calculateValues(firstNumber, secondNumber, operator));

// practice 6.4

// // 1. Set up an empty array to store the values that will be calculated within the loop
// const resultsArray = [];

// // 2. Create a loop that runs 10 times, incrementing by 1 each time
// for (let i = 1; i <= 10; i++) {
//     // Create two values each iteration
//     const value1 = i * 5;
//     const value2 = i * i;

//     // 3. Create a function that returns the added values
//     function calculateSum(num1, num2) {
//         return num1 + num2;
//     }

//     // 4. Within the loop, call the calculation function and store the result in a response variable
//     const result = calculateSum(value1, value2);

//     // 5. Push the result values into the array as it iterates through the loop
//     resultsArray.push(result);
// }

// // 6. After the loop is complete, output the value of the array into the console
// console.log("Array of results:", resultsArray);

// practice 6.5

// // 1. Create a variable `value` with `let` and assign a string value of 1000 to it
// let value = '1000';

// // 2. Create an IIFE function and within this function scope assign a new value to a variable of the same name
// (function() {
//     let value = 'Local Value';
    
//     // Within the function, print the local value to the console
//     console.log('Local value within IIFE:', value);
// })();

// // 3. Create an IIFE expression, assigning it to a new `result` variable
// const result = (function() {
//     // Assign a new value to a variable of the same name within this scope
//     let value = 'New Local Value';
    
//     // Return this local value to the `result` variable
//     return value;
// })();

// // Print the `result` variable, along with the variable name you've been using
// console.log('Result variable:', result);

// practice 6.6

// Create a function to calculate the factorial
function calculateFactorial(n) {
    // Check if the argument value is 0
    if (n === 0) {
        return 1; // Return 1 if the argument is 0
    } else {
        // Output the current value of the argument
        console.log(`Current value of n: ${n}`);
        
        // Return the value of the argument multiplied by the factorial of (n-1)
        return n * calculateFactorial(n - 1);
    }
}

// Invoke the function with an argument
let numberToCalculate = 5; // You can change this to any other number
let result = calculateFactorial(numberToCalculate);

// Output the result to the console
console.log(`Factorial of ${numberToCalculate} is: ${result}`);


// practice 6.7

// // 1. Set the start variable at a value of 18, which will be used as the starting value for the loop.
// let start = 18;

// // 2. Create a function that takes one argument, which is the countdown value.
// function countdown(value) {
//     // 3. Within the function, output the current value of the countdown into the console.
//     console.log(`Countdown: ${value}`);
//     // 4. Add a condition to check if the value is less than 1; if it is, then return the function.
//     if (value < 1) {
//         return;
//     } else {
//         // 5. Add a condition to check if the value of the countdown is not less than 1,
//         // then continue to loop by calling the function within itself.
//         countdown(value - 1);
//     }
// }
// // 6. Invoke the countdown function with the dynamic starting value.
// countdown(start);
// // 7. Update and create a second countdown using a condition if the value is greater than 0.
// // 8. Use return to return the function, which then invokes it again and again until the condition is no longer true.
// function countdown2(value) {
//     // 3. Within the function, output the current value of the countdown into the console.
//     console.log(`Countdown 2: ${value}`);
//     // 9. Make sure, when you send the new countdown value as an argument into the function,
//     // that there is a way out of the loop by using the return keyword and a condition that continues the loop if met.
//     if (value > 0) {
//         return countdown2(value - 1);
//     }
// }
// // 10. Invoke the second countdown function with a different starting value.
// countdown2(12);

// practice 6.8

// // 1. Set a variable `name` and assign a function to it.
// const logNameFunctionExpression = function (argument) {
//     // Create a function expression with one parameter that outputs a provided argument to the console.
//     console.log(argument);
// };

// // 2. Pass an argument into the function expression.
// logNameFunctionExpression("Hello from Function Expression!");

// // 3. Create the same function as a normal function declaration.
// function logNameFunctionDeclaration(argument) {
//     // Normal function declaration with one parameter that outputs a provided argument to the console.
//     console.log(argument);
// }

// // 4. Pass an argument into the function declaration.
// logNameFunctionDeclaration("Hello from Function Declaration!");

// chapter project
// question 1
// function countUpTo10(start) {
//     // Base case: check if the current value is greater than 10
//     if (start > 10) {
//         return;
//     } else {
//         // Output the current value to the console
//         console.log(start);

//         // Call the function recursively with an incremented value
//         countUpTo10(start + 1);
//     }
// }

// // Invoke the function with different start numbers
// countUpTo10(5); // Counts from 5 to 10
// countUpTo10(8); // Counts from 8 to 10
// countUpTo10(12); // Does not run as the start value is already greater than 10

// question 2

// Function that outputs the value "one" to the console
// const printOne = () => console.log("One");

// // Function that outputs the value "two" to the console
// const printTwo = () => console.log("Two");

// // Function that outputs the value "three" to the console and invokes the first two functions
// const printThree = () => {
//     console.log("Three");
//     printOne();
//     printTwo();
// };

// // Function that outputs the word "four" to the console
// const printFour = () => console.log("Four");

// // Use setTimeout to invoke the first function immediately and then the third function
// setTimeout(() => {
//     printOne();
//     setTimeout(() => {
//         printThree();
//         setTimeout(printFour, 0); // Invokes the fourth function after a timeout of 0 milliseconds
//     }, 0);
// }, 0);

