let negZerOrNot = number => {
  if(1/number === -Infinity) {
    return true;
  }

  else return false;
};


console.log(negZerOrNot(0));
console.log(negZerOrNot(5));
console.log(negZerOrNot(-5));
console.log(negZerOrNot(12));
console.log(negZerOrNot(-0));
