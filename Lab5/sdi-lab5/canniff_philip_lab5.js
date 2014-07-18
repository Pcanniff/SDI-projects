var numOne;
var numTwo;
var symbol;
var solution;

var addition = function(num1, num2) {
	
	var solution;
	if (symbol === "+") {
		
		solution = (num1 + num2);
		return solution;
}
};

numOne = parseFloat(prompt("What is your first number?"));
numTwo = parseFloat(prompt("what is your second number?"));
symbol = prompt("What form of arithmetic are you using? EX: +, -, *, or /");

var evaluation = addition(numOne, numTwo);
console.log(evaluation);




