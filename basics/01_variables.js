const accountId = 847938
let accountEmail = "randomnan@gmail.com"
var accountPassword = "12345" //var is not scope specific
accountCity = "Jaipur"
let accoundState //if no value given it is said to be undefined
//accountId = 2; //not allowed

accountEmail = "rnad@asd.com"
accountPassword = "122"
accountCity = "Delhi"

/* prefer to not use var 
because of issue in block scope and fucntional scope
*/ 
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accoundState])
