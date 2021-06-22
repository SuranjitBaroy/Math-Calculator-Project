//Math Calculator Project
var number1 = prompt("Enter Your First Number");
    // number1 = parseInt(number1);
    number1 = parseFloat(number1); 
var number2 = prompt("Enter Your Last Name");
    // number2 = parseInt(number2);
    number2 = parseFloat(number2);

var result;
var result  = number1 + number2;
console.log("Total Addition is: "+ number1 +"+"+ number2+ "=" +result);

var result  = number1 - number2;
console.log("Total Subtraction is: "+ number1 +"-"+ number2+ "=" +result);

var result  = number1 * number2;
console.log("Total Multiplication is: "+ number1 +"*"+ number2+ "=" +result);

var result  = number1 / number2;
console.log("Total Division is: "+ number1 +"/"+ number2+ "=" +result);

var ran = Math.random()*10;
var rou = Math.round(ran);

console.log(rou);
