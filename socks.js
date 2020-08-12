// const ar = [1, 2, 1, 2, 1, 3, 2]; // color of each sock
// find the number of pairs with matching colors
// const n = 7; // number of socks

const findNumberOfPairs = (n, ar) => {
  let numberOfPairs = 0;
  const socks = {};
  for (let i = 0; i < n; i++) {
    if (!socks[ar[i]]) {
      socks[ar[i]] = ar[i];
    } else {
      numberOfPairs++;
      delete socks[ar[i]];
    }
  }

  return numberOfPairs;
};

// Sample input
const n = 9;
const ar = '10 20 20 10 10 30 50 10 20';

console.log(findNumberOfPairs(n, ar));
