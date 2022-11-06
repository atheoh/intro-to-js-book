// let evenOrOdd = (num) => {

//   if(Number.isInteger(num)) {
//   if(num % 2 === 0) {
//     console.log("even");
//   }
//   else {
//     console.log("odd");
//   }
// }
// else {
//   console.log("Argument is not a number");
// }
// };

// evenOrOdd(4);

let evenOrOdd = (num) => {

  if(typeof num === 'number') {
  if(num % 2 === 0) {
    console.log("even");
  }
  else {
    console.log("odd");
  }
}
else {
  console.log("Argument is not a number");
}
};

evenOrOdd(3);