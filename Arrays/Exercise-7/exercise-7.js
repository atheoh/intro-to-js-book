let array = [3, 5, 7];

// let sumOfSquares = array => {
//   let squaredArray = array.reduce((accumulator, element) => accumulator + element * element, 0);
//   return squaredArray;
// };

let sumOfSquares = array => array.reduce((accumulator, element) => element*element + accumulator, 0);



console.log(sumOfSquares(array)); // => 83