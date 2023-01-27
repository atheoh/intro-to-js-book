let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;



/* Snippet 1

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

This snippet only logs the original key "qux" of myObj 

Snippet 2

for (let key in myObj) {
  console.log(key);
}

This snippet first logs the key "qux" and then the two keys of its
prototype
 
*/
