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
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clearOne");
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
clearOne.addEventListener("click", function() {
    if (num2. length) {
  num2 = num2.slice(0,-1); 
}
  else if (operator.length) {
  
  operator = ""; 
  isOperatorSelected = false;
}

  else if (num1. length) {
  num1 = num1.slice(0, -1);
  }
  display.innerText = `${num1} ${operator} ${num2}`;

});


