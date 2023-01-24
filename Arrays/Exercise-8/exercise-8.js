let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => array.reduce((filteredArray, element) => {

  if(element.length % 2 === 1){
    filteredArray.push(element.length);
  }

  return filteredArray;
}, []);

console.log(oddLengths(arr)); // => [1, 5, 3]