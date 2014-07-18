var numOne;
var numTwo;
var symbol;
var solution;

var addition = function(num1, num2) {
	
	var solution;
	if (symbol === "+") {
		
		solution = (num1 + num2);
		return solution;
} else {

}
};

var subtract = function(num1, num2) {
	
	var solution;
	if (symbol === "-") {
		
		solution = (num1 - num2);
		return solution;
}
};

numOne = parseFloat(prompt("What is your first number?"));
numTwo = parseFloat(prompt("what is your second number?"));
symbol = prompt("What form of arithmetic are you using? EX: +, -, *, or /");

var evaluationsub = subtract(numOne, numTwo);
var evaluation = addition(numOne, numTwo);

if (symbol === "+") {
console.log(evaluation);
}
if (symbol === "-") {
console.log(evaluationsub); 
}
