// Philip A. Canniff
// SDI 1407
// Lee Lewis
// Lab 10

// Variables for Problem 1
var value = 0;
var returnValue;
// Variables for Problem 2
var caughtValue;
var fiveOnly;
// Function for Problem 1
var mathCheck = function(stringArg) {
	var answer = 0;
	for (var i = 1; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {

			answer = answer + i;

		}

	}
	return answer;
};
// Function for Problem 2
var generator = function() {
	var sixNum = [];
	var number = 0;
	for (var i = 0; i < 5; i++) {
		number = Math.floor((Math.random() * 58) + 1);

		while (number === sixNum[0] || number === sixNum[1] || number === sixNum[2] || number === sixNum[3] || number === sixNum[4]) {
			number = Math.floor((Math.random() * 58) + 1);

		}

		sixNum[sixNum.length] = number;

	}
	sixNum[sixNum.length] = Math.floor((Math.random() * 34) + 1);
	return sixNum;
};

//Outputs
returnValue = mathCheck(value);
console.log("The sum of all numbers divisble by 3 and 5 below 1000 is " + returnValue + ".");
caughtValue = generator();
fiveOnly = caughtValue.pop();
console.log("Your possbile, but very unlikely, winning numbers are: " + caughtValue + " with a final Powerball Number: " + fiveOnly + ".");
