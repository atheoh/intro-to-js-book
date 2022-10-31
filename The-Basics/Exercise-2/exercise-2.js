let number = 4936;
let thousands =  parseInt((number % 10000) / 1000 );
let hundreds = parseInt((number % 1000) / 100);
let tens = parseInt((number % 100) / 10);
let ones = number % 10;
//console.log(ones);
