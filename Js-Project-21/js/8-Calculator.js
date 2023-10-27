const userInput = document.getElementById("userInput");

let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}

function erase() {
    expression = '';
    userInput.value = expression;
}




// function press(value) {
//   // Append the value to the expression
//   expression += value;
//   userInput.value = expression;
// }

// function equal() {
//   try {
//     // Evaluate the expression and display the result
//     userInput.value = eval(expression);
//     expression = "";
//   } catch (error) {
//     // Handle errors (e.g., division by zero)
//     userInput.value = "Error";
//     expression = "";
//   }
// }

// function erase() {
//   // Clear the expression and the display
//   expression = "";
//   userInput.value = "";
// }