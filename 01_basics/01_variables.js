const accountId = 1;
let accountEmail = "ptk@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

/*
    prefer not to user var because of issue in block scope and funtional scope
*/

//try to change above variables values
//accountId = 2   //not allowed to change the value of const variable
accountEmail = "hnwte@gmail.com"
accountPassword = "4321"
accountCity = "Hingoli"

console.table([accountId,accountEmail,accountPassword,accountCity]);
