const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, val) => sum + val, 0);
};

const multiply = function (arr) {
  // let start;
  // if (arr.isEmpty) start = 0;
  // start = 1;
  // return arr.reduce((sum, val) => sum * val, start);

  return arr.length ? arr.reduce((sum, val) => sum * val) : 0;
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  let factorial = 1;
  if (num === 0) return factorial;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
