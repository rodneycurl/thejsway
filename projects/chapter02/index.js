// IMPROVED HELLO: Write a program that asks the user for their first and last name.
const name = prompt("What's your full name?");
alert(`Hello, ${name}!`);

// FINAL VALUES: Observer the following program and predict the final values of its variables
let a = 2; // a is 2
a -= 1; // a is 1
a++; // a is 1
let b = 8; // b is 8
b += 2; // b is 10
const c = a + b * b; // c is 1 + 10 * 10 = 101
const d = a * b + b; // d is 1 * 10 + 10 = 20
const e = a * (b + b); // e is 1 * (10 + 10) = 20
const f = a * b / a; // f is 1 * 10 / 2 = 5
const g = b / a * a; // g is 10 / 1 * 1 = 1
console.log(a, b, c, d, e, f, g); // 1, 10, 101, 20, 20, 5, 1

// VAT CALCULATION: Write a program that ask the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%

const rawPrice = prompt("What's the raw price?");
const totalPrice = rawPrice * 20.6%;
alert(`Your total price is ${totalPrice}`);

// FROM CELSIUS TO FAHRENHEIT DEGREES: Write a program that asks for a tempature in Celsius degress, then display it in Fahrenheit degrees.

const tempature = prompt("What's your current tempature in Celsius, right now?");
const fahrenheitTempature = (tempature) 9/5 + 32;
alert(`Your tempature in fahrenheit is ${fahrenheitTempature}`);

// VARIABLE SWAPPING: Add the necessary code to swap the values of variables number1 and number 2

let number1 = 5;
let number2 = 3;

const number1 = 3;
const number2 = 5;
