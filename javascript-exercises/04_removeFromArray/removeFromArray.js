const removeFromArray = function (array, ...args) {
  return array.filter((item) => {
    for (let arg of args) {
      if (arg === item) {
        return false;
      }
    }
    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
