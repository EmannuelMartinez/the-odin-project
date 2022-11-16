const repeatString = function (phrase, noOfRepeats) {
  if (noOfRepeats === 0) {
    return "";
  } else if (noOfRepeats < 0) {
    return "ERROR";
  }

  let repeatString = "";

  for (let i = 0; i < noOfRepeats; i++) {
    repeatString += phrase;
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
