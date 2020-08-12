const hourglassSum = (arr) => {
  const allGlassesSum = [];
  for (let iStart = 0; iStart < arr.length - 2; iStart++) {
    for (let jStart = 0; jStart < arr.length - 2; jStart++) {
      let sum = 0;
      for (let i = iStart; i <= iStart + 2; i++) {
        for (let j = jStart; j <= jStart + 2; j++) {
          let glassI = i - iStart;
          let glassJ = j - jStart;
          if (
            !(
              (glassI > glassJ && glassI + glassJ === 1) ||
              (glassI < glassJ && glassI + glassJ === 3)
            )
          ) {
            sum += arr[i][j];
          }
        }
      }

      allGlassesSum.push(sum);
    }
  }

  return Math.max.apply(Math, allGlassesSum);
};

// [[1, 1, 1, 0, 1, 0, 1, 1, 1]]

// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

// const arr = [
//   [1, 1, 1, 0, 0, 0, 1],
//   [0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [0, 0, 2, 4, 4, 0, 1],
//   [0, 0, 0, 2, 0, 0, 1],
//   [0, 0, 1, 2, 4, 0, 1],
//   [1, 2, 3, 4, 5, 6, 7],
// ];

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

console.log(hourglassSum(arr));
/*
[
  [ 1, 1, 1 ],
  [ 0, 1, 0 ],
  [ 1, 1, 1 ]
]

[
  [ 00, 01, 02 ],
  [ 10, 11, 12 ],
  [ 20, 21, 22 ]
]

(i > j && i + j === 1 || i < j && i + j === 3) do not sum it
[
  0,0   0,1   0,2

  1X0   1,1   1X2

  2,0   2,1   2,2
]

[
  0,1   0,2   0,3

  1X1   1,2   1X3

  2,1   2,2   2,3
]

console.log(
              `i: ${i} | iStart: ${iStart} | j: ${j} | jStart: ${jStart} => arr[i][j]: ${arr[i][j]}`
            );

*/
