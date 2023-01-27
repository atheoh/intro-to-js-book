let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArray = Object.keys(obj);
let objArrayUp = objArray.map(key => key.toUpperCase());
console.log(objArrayUp);
console.log(obj);