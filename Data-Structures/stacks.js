// Stacks

// Problem: Given a string made up of the following brackets: ()[]{}, determine wether the brackets properly match.

const isValidPattern = (pattern) => {
  // Solution
  let openSquareBrackets = 0;
  let closeSquareBrackets = 0;
  let openCurles = 0;
  let closeCurles = 0;
  let openCircleBrackets = 0;
  let closeCircleBrackets = 0;
  for (let char of pattern) {
    switch (char) {
      case '[':
        openSquareBrackets += 1;
        break;
      case '(':
        openCircleBrackets += 1;
        break;
      case '{':
        openCurles += 1;
        break;
      case ']':
        closeSquareBrackets -= 1;
        break;
      case ')':
        closeCircleBrackets -= 1;
        break;
      case '}':
        closeCurles -= 1;
        break;
      default:
        continue;
    }
  }

  // console.log(
  //   openSquareBrackets +
  //     closeSquareBrackets +
  //     openCircleBrackets +
  //     closeCircleBrackets +
  //     openCurles +
  //     closeCurles ===
  //     0
  // );

  return (
    openSquareBrackets +
      closeSquareBrackets +
      openCircleBrackets +
      closeCircleBrackets +
      openCurles +
      closeCurles ===
    0
  );
};

console.log(isValidPattern('[[{}]()]'));
