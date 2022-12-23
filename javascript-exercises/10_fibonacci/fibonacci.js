const fibonacci = function (a) {
  if (a < 0) return "OOPS";
  if (a === 0) return 0;
  let x = 0;
  let y = 1;
  for (let i = 1; i < a; i++) {
    let temp = y;
    y = x + y;
    x = temp;
  }
  return y;
};

// Do not edit below this line
module.exports = fibonacci;
