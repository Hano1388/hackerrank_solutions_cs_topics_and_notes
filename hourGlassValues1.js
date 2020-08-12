const hourglassSum = (arr) => {
  const allGlasses = [];
  // make sure that the start for both row and column always
  // have two extra rows & columns to take in order to form
  // a 3X3 matrix
  for (let iStart = 0; iStart < arr.length - 2; iStart++) {
    for (let jStart = 0; jStart < arr.length - 2; jStart++) {
      let oneGlass = [];
      for (let i = iStart; i <= iStart + 2; i++) {
        let temp = [];
        for (let j = jStart; j <= jStart + 2; j++) {
          temp.push(arr[i][j]);
        }
        oneGlass.push(temp);
      }
      allGlasses.push(oneGlass);
    }
  }

  console.log(allGlasses);

  const arrOfSums = [];
  for (let glass of allGlasses) {
    let glassSum = 0;
    for (let i = 0; i < glass.length; i++) {
      for (let j = 0; j < glass[i].length; j++) {
        if (!((i > j && i + j === 1) || (i < j && i + j === 3))) {
          glassSum += glass[i][j];
        }
      }
    }
    arrOfSums.push(glassSum);
  }

  console.log(arrOfSums);
  // console.log(Math.max(arrOfSums));
  return Math.max.apply(Math, arrOfSums);
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

*/
