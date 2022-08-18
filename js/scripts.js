// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic
const number1 = parseInt(prompt("enter a number"));
const number2 = parseInt(prompt("enter another number"));

window.alert(add(number1,number2));

