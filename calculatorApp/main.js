let num1 = "";
let num2 = "";
let operator = "";
let result = null;
let isOperatorSelected = false;

const numbers = document.querySelectorAll(".num");
const addition = document.getElementById("addition");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const subtraction = document.getElementById("subtraction");
const clearOne = document.getElementById("clear-one");
const equal = document.getElementById("equal");
const display = document.getElementById("display");

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (!isOperatorSelected) {
      //   num1 += event.target.innerText;
      num1 = num1 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    } else {
      num2 = num2 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    }
  });
});
addition.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});
multiplication.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});
division.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});

subtraction.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});
clearOne.addEventListener("click", function (event) {
  isOperatorSelected = true;
  num1= event.target.innerText;
  display.innerText = String.subtraction(0, String.length-1);
});


function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorSelected = false;
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

equal.addEventListener("click", function (event) {

  if (operator === "+") {
    display.innerText = parseInt(num1) + parseInt(num2);
  } 
  else if(operator === "*") {
    display.innerText = parseInt(num1) * parseInt(num2);

  } 
    else if  (operator === "/") {
      display.innerText = parseInt(num1) / parseInt(num2);

    } else if (operator === "-") {
    display.innerText = parseInt(num1) - parseInt(num2);

    }
    // else if (operator === "&#8592;") {
    //   num1.innerText = String.subtraction(0, String.length-1);
  
    //   }
    else if (operator.innerText === "&#8592;") {
      inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length - 1);
      if (inputValue.innerText.length == 0) {
          inputValue.innerText = 0;
      }
});


// clearOne.clearDisplay("click", function () {
//   if (num2.length ) {
//     let newNum = num2.split("");
//     newNum.pop();
//     num2 = newNum.join("");
//   } else if (operator.length ) {
//     operator = "";
//   } else if (num1.length ) {
//     let newNum = num1.split("");
//     newNum.pop();
//     num1 = newNum.join("");
//   }
// });




