let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => (array.map(element => element.length)).filter(el => el % 2 !== 0);


// let oddLengths = array => {
// let lengthsArray = array.map(element => element.length);
// let oddLengths = lengthsArray.filter(element => element % 2 !== 0);
// return oddLengths;
// }

console.log(oddLengths(arr));



