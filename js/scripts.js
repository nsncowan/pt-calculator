// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic
const number1 = parseInt(prompt("enter a number"));
const number2 = parseInt(prompt("enter another number"));

window.alert(
  number1.toString() + " + " + number2.toString() + " = " + add(number1,number2)+ "\n" +
  number1.toString() + " - " + number2.toString() + " = " + subtract(number1,number2)+ "\n" +
  number1.toString() + " * " + number2.toString() + " = " + multiply(number1,number2) + "\n" +
  number1.toString() + " / " + number2.toString() + " = " + divide(number1,number2));

