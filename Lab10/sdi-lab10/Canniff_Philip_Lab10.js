// Philip A. Canniff
// SDI 1407
// Lee Lewis
// Lab 10

// Variables for Problem 1
var value = 0;
var returnValue;
//Variables for Problem 2
var powerNums = [];
// Functions for Problem 1
var mathCheck = function(stringArg) {
	var answer = 0;
	for (var i = 1; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {

			answer = answer + i;

		}

	}
	return answer;
};
//Function for Problem 2


//Outputs
returnValue = mathCheck(value);
console.log("The sum of all numbers divisble by 3 and 5 below 1000 is " + returnValue + ".");
caughtValue = generator(newArray);
