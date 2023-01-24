let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let checker = array => {
  
  if(array.filter(number => number === 3)[0] === 3) {
    return true;
  }
  else return false;

};

console.log(checker(numbers1));
console.log(checker(numbers2));
console.log(checker(numbers3));

// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers2.includes(3));