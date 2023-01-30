let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// The above code logs [1, 4, 3] to the console because when the element with index 1
// was reassigned to the value 4 in array1 the same change occurs in array2 because
// both variables point to the same object (array). (or reference the same array)