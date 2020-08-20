console.time('first solution');
const minimumSwaps = (arr) => {
  const arrSize = arr.length;
  // create an array with all elements sorted in ascending order, keeps track on their original positions and
  // make sure to set a new key (visited) that helps with counting cycles and making sure that the same
  // element is not visited more than once.
  const sortedArr = [];
  for (let i = 0; i < arrSize; i++) {
    sortedArr[i] = [];
    sortedArr[i].value = arr[i];
    sortedArr[i].position = i; // to count cycles we keep track of original position of each element
    sortedArr[i].visited = false;
  }

  sortedArr.sort(function (a, b) {
    return a.value - b.value;
  });

  let noOfSwaps = 0;
  for (let i = 0; i < arrSize; i++) {
    if (sortedArr[i].position == i || sortedArr[i].visited) {
      continue;
    }

    let cycle = 0;
    let j = i;
    while (!sortedArr[j].visited) {
      sortedArr[j].visited = true;
      j = sortedArr[j].position;
      cycle++;
    }
    if (cycle > 0) {
      noOfSwaps += cycle > 1 ? cycle - 1 : cycle;
    }
  }

  return noOfSwaps;
};

// console.log(minimumSwaps([5, 4, 1, 2]));
// console.log(minimumSwaps([0, 2, 3, 4, 1, 6, 5])); // 4
// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3
console.log(minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5])); // 9
// console.log(minimumSwaps([4, 2, 3, 5, 1, 8, 9, 11, 10, 12])); // 3
// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(minimumSwaps([1, 4, 3, 2]));

console.timeEnd('first solution');
