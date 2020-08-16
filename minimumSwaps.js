console.time('first solution');
const minimumSwaps = (arr) => {
  let numberOfSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    let elementToSwapWith = Math.min(...[...arr].splice(i, arr.length - 1));
    let toSwapWithIndex = arr.indexOf(elementToSwapWith);
    if (arr[i] !== elementToSwapWith) {
      numberOfSwaps += 1;
      let temp = arr[i];
      arr[i] = arr[toSwapWithIndex];
      arr[toSwapWithIndex] = temp;
    }
  }

  return numberOfSwaps;
};

// minimumSwaps([5, 4, 1, 2]);
// console.log(minimumSwaps([0, 2, 3, 4, 1, 6, 5]));

console.timeEnd('first solution');

console.time('second solution');
const minimumSwaps2 = (arr) => {
  var arrLength = arr.length;

  // create two new Arrays
  // one record value and key separately
  // second to keep visited node count (default set false to all)

  var newArr = [];
  var newArrVisited = [];
  for (let i = 0; i < arrLength; i++) {
    newArr[i] = [];
    newArr[i].value = arr[i];
    newArr[i].key = i;
    newArrVisited[i] = false;
  }

  // sort new array by value

  newArr.sort(function (a, b) {
    return a.value - b.value;
  });

  console.log(newArr);

  var swp = 0;
  for (let i = 0; i < arrLength; i++) {
    // check if already visited or swapped
    if (newArr[i].key == i || newArrVisited[i]) {
      continue;
    }

    var cycle = 0;
    var j = i;
    while (!newArrVisited[j]) {
      // mark as visited
      newArrVisited[j] = true;
      j = newArr[j].key; //assign next key
      cycle++;
    }
    if (cycle > 0) {
      swp += cycle > 1 ? cycle - 1 : cycle;
    }
  }
  return swp;
};

console.log(minimumSwaps2([0, 2, 3, 4, 1, 6, 5]));
console.timeEnd('second solution');
