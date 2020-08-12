const countingValeys = (n, s) => {
  s = s.toLowerCase().trim();
  let lvl = 0; // sea level
  let counter = 0; // count the number of valleys
  for (let char of s) {
    if (char === 'u') ++lvl;
    if (char === 'd') --lvl;

    if (lvl === 0 && char === 'u') {
      ++counter;
    }
  }

  return counter;
};

console.log(countingValeys(8, 'DUDU'));
