//The following expression logs 'false' because when strings are compared, JavaScript performs a character-by-character comparison 
//going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.
console.log('12' < '9');
