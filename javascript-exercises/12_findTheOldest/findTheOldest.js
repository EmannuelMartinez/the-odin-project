const findTheOldest = function (people) {
  return people.reduce((oldest, current) =>
    (oldest.yearOfDeath ? oldest.yearOfDeath : 2022) - oldest.yearOfBirth >
    (current.yearOfDeath ? current.yearOfDeath : 2022) - current.yearOfBirth
      ? oldest
      : current
  );
};

// Do not edit below this line
module.exports = findTheOldest;
