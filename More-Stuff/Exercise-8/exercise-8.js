let isNotANumber = num => {
  return num !== num;
};

console.log(isNotANumber("test"));
console.log(isNotANumber(null));
console.log(isNotANumber(5));
console.log(isNotANumber(''));
console.log(isNotANumber(NaN));