const bottomUpFib = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  const bottomUp = Array.from({ length: n });
  bottomUp[1] = 1;
  bottomUp[2] = 1;
  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }

  return bottomUp[n];
};

console.time('test1');
console.log(bottomUpFib(10)); // 55
console.timeEnd('test1');

console.time('test2');
console.log(bottomUpFib(100)); // 354224848179262
console.timeEnd('test2');

console.time('test3');
console.log(bottomUpFib(10000)); // Infinity
console.timeEnd('test3');

/*
const recursionFib = (n) => {
  let result;
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = recursionFib(n - 1) + recursionFib(n - 2);
  }
  return result;
};

console.time('test1');
console.log(recursionFib(10));
console.timeEnd('test1');
*/
