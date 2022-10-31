/* The code below logs '510' because one of the operands is
a string so the second operand is coerced to a String 
(implicit coercion) and concatenated to the first 
operand and finally the log function logs the result 
as a string
*/
console.log('5' + 10);