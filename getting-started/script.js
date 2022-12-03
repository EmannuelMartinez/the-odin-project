function topThreeWords(text) {
  let arr = [...text.matchAll(/\b[\w']+\b/gi)];
  arr = arr.sort();

  let counted = arr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
    return acc;
  }, {});

  const values = Object.values(counted).sort((a, b) => b - a);
  let keys;
  const maxN = values[values.length - 3];
  keys = Object.entries(counted).reduce(
    (o, [k, v]) => (v >= maxN ? { ...o, [k]: v } : o),
    {}
  );

  keys = Object.keys(keys).sort((a, b) => b - a);

  return keys;
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("a a c b b"));
