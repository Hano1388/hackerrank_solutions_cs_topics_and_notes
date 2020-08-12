const repeatedString = (s, n) => {
  if (s === 'a') {
    return n;
  }

  if (!s.split('').includes('a')) {
    return 0;
  }

  // find how many times a repeated in the string
  const a1 = s.length - s.split('a').join('').length;
  // find how many complete times the string needs to be
  // repeated
  const rs = Math.floor(n / s.length);
  // find the portion of the string that will be repeated at last
  const remainedString = s.slice(0, n - rs * s.length);
  // find the number of As that will be repeated in the remainedString
  const additionalAs =
    remainedString.length - remainedString.split('a').join('').length;
  // total number of As = As in initial string *
  //                      how many times the string is repeated +
  //                      additional As
  const as = a1 * rs + additionalAs;
  return as;
};

console.log(
  repeatedString(
    'udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps',
    872514961806
  )
);
