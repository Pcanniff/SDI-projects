var numOne;
var numTwo;
var symbol;
var solution;

var addition = function(num1, num2) {
	
	var solution; 
		
		solution = (num1 + num2);
		return solution;

};

var subtract = function(num1, num2) {
	
	var solution; 
		
		solution = (num1 - num2);
		return solution;

};

var multiply = function(num1, num2) {
	var solution;
		
		solution = (num1 * num2);
		return solution;
};

// var divide = function(num1, num2) {
	// var solution; 
// 		
		// solution = (num1 / num2);
		// return solution;
// 
// };

numOne = parseFloat(prompt("What is your first number?"));
numTwo = parseFloat(prompt("what is your second number?"));
symbol = prompt("What form of arithmetic are you using? EX: +, -, *, or /");

var evaluationsub = subtract(numOne, numTwo);
var evaluation = addition(numOne, numTwo);
var evaluationmulti = multiply(numOne, numTwo);
// var evaluationdivide = divide(numOne, numTwo);

if (symbol === "+") {
console.log("The sum of", numOne, "and", numTwo, "is equal to", evaluation + ".");
}
if (symbol === "-") {
console.log("The difference of", numOne, "and", numTwo, "is equal to", evaluationsub + "."); 
}
if (symbol === "*") {
console.log("The product of", numOne, "and", numTwo, "is equal to", evaluationmulti + ".");
}
// if (symbol === "/") {
		// if (numTwo === 0) {
		// console.log("Can't divide by 0.");
// } else {
	// console.log("The quotient of", numOne, "and", numTwo, "is equal to", evaluationdivide + ".");
// }
// } 

