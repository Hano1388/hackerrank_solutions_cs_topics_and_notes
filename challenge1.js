const input = ['abc', '123', 'def', 'qwerty', 'boom!'];

function splitArray(data, max) {
  // first we clone the original data to avoid
  // mutation
  const dataClone = [...data];

  // We do not need to run our loop if max is less than or equal 1
  // if (max <= 1) {
  //   console.log('Cannot split data into smaller chunks than 1');
  //   return data;
  // }
  const result = [];
  let i = 0;
  while (i < dataClone.length) {
    // splice gets a partial array
    // from i to max elements and dataClone
    // array size will be reduced after each splice by max elements
    result.push(dataClone.splice(i, max));
  }

  return result;
}

console.log(splitArray(input, 2));
