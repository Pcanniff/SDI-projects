//	Philip A. Canniff
//	SDI 1407
//	Lab 9
//	Lee Lewis
//	07/26/2014

//Problem 1 variables
var numData = 1.23456789;
var specLimit = 3;
var catcher;
//Problem 2 variables
var number = "1990";
var validatedNum;
//Problem 3 variables
var firstDate = new Date("7/26/2014");
var secondDate = new Date("7/31/2014");
var duration = "days";
var difference;
//Problem 1 function
var limiter = function(data, limit) {

	var decCutOff = data.toFixed(limit);

	return decCutOff;
};
// Problem 2 function
var numChecker = function(stringCheck) {

	var checker = !isNaN(stringCheck);

	if (checker === true) {

		var parsedVar = parseInt(stringCheck);

		return parsedVar;

	} else {

		error = "Invalid numerical input";

		return error;
	}

};
//Problem 3 function
var dateDifference = function(dateOne, dateTwo, timeVal) {

	var difference = dateOne - dateTwo;
	var difference = Math.abs(difference);

	if (timeVal === "days") {

		var answer = difference / 1000 / 60 / 60 / 24;
		return answer;

	} else if (timeVal === "hours") {

		var answerHours = difference / 1000 / 60 / 60;
		return answerHours;

	} else {

		var noDur = "Invalid input";
		return noDur;

	}

};

//Outputs
validatedNum = numChecker(number);
console.log("Number value is equal to:", validatedNum + ".");

catcher = limiter(numData, specLimit);
console.log(catcher, "is an example of a number in the thounsandths place.");

difference = dateDifference(firstDate, secondDate, duration);
console.log("There are", difference, duration, "until our exam! Better study!");
