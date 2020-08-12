const input = ['abc', '123', 'def', 'qwerty', 'boom!'];

function splitArray(data, max) {
  let dataClone = [...data];
  // The idea is to create an object with
  //  keys equal the number of characters for
  // each string. If the number of characters
  // are equal then we just append that string
  // to the value of key otherwise, we create new key
  // and finally we just return the values of the obejct
  // console.log(dataClone);
  const result = {};

  for (let i = 0; i < dataClone.length; i++) {
    if (result[dataClone[i]]) {
      result[dataClone[i].length].push(dataClone[i]);
    } else {
      result[dataClone[i].length] = [dataClone[i]];
    }
  }
  // Object.values return an array of values of each key
  // in an object
  return Object.values(result);
}

console.log(splitArray(input));
