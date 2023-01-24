let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// let evenNums = myArray.filter( element => element % 2 === 0);

// console.log(evenNums);

let evenNums = myArray.forEach(element => {
  if (element % 2 === 0) {
    console.log(element);
  }
});