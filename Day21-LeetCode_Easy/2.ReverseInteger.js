var reverse = function (x) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  const str = x.toString();
  let reversedStr;

  if (x < 0) {
    reversedStr = "-" + str.slice(1).split("").reverse().join("");
  } else {
    reversedStr = str.split("").reverse().join("");
  }

  const reversedInt = parseInt(reversedStr, 10);

  if (reversedInt > MAX_INT || reversedInt < MIN_INT) {
    return 0;
  }

  return reversedInt;
};
