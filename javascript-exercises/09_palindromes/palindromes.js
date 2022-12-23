const palindromes = function (phrase) {
  let test = phrase.toLowerCase().match(/[a-z]/gi);
  for (let i = 0; i < test.length / 2; i++) {
    if (!(test[i] === test[test.length - i - 1])) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
