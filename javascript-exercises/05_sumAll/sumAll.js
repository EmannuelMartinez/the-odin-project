const sumAll = function (a, b) {
  if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0) {
    return "ERROR";
  }

  let lo;
  let hi;

  if (b > a) {
    lo = a;
    hi = b;
  } else {
    lo = b;
    hi = a;
  }

  let sum = 0;

  for (let i = lo; i <= hi; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
