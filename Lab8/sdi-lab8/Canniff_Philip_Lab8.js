// // Philip A. Canniff
// // SDI 1407
// // Lee Lewis
// // Lab 8
//
// //Problem 1
// variables
var email = "pcanniff@fullsail.edu";
//My function
var emailCheck = function(emailArg) {

	var check = emailArg.indexOf("@");
	var doubleCheck = emailArg.lastIndexOf("@");
	var periodCheck = emailArg.indexOf(".", check);
	//search always returned 0 for the periodCheck. Richard and I concluded it was a parameter missing for "." within JavaScript.
	var spaceCheck = emailArg.search(" ");
	var validation = true;
	//My Loop
	if ((check > -1 && (doubleCheck === check)) && (periodCheck > -1) && (spaceCheck < 0)) {
		var validation = true;
	} else {
		var validation = false;
	}
	return validation;
};
//Return capture and function call plus a meaningful output.
var validated = emailCheck(email);
console.log("It is " + validated + " that this is a valid e-mail address.");

//Problem 2
//Strings and return Capture
var stringOne = "Batman,Spider-man,Superman,Hulk,Shazaam,Iron-man";
var seperatorOne = ",";
var seperatorTwo = "/";
var capture = "";
//Function
var seperatorChanger = function(stringData, sep1, sep2) {

	var splitString = stringData.split(sep1);
	var newString = splitString[0];
	//My Loop
	for (var i = 1; i < splitString.length; i++) {

		newString = newString + sep2 + splitString[i];

	}
	return newString;
};
// Function Call and Output
capture = seperatorChanger(stringOne, seperatorOne, seperatorTwo);
console.log("The following is a list of awesome people in tight suits: \"" + capture + ".\"");

