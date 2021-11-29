const { check } = require('./check');

const add = (a, b) => check(a) && check(b) ? a + b : new Error('Only numbers');
const subtraction = (a, b) => check(a) && check(b) ? a - b :  new Error('Only numbers');
const divide = (a, b) => check(a) && check(b) ? a / b :  new Error('Only numbers');
const multiply = (a, b) => check(a) && check(b) ? a * b :  new Error('Only numbers');

module.exports = { add, subtraction, divide, multiply }