// Philip A. Canniff
// SDI 1407
// Lee Lewis
// Lab 8: Problem 1

var email = "pcanniff@fullsailedu";

var emailCheck = function(emailArg) {
	
	var check = emailArg.indexOf("@");
	var doubleCheck = emailArg.lastIndexOf("@");
	var periodCheck = emailArg.indexOf(".", check); //search always returned 0 for the periodCheck. Richard and I concluded it was a parameter missing for "." within JavaScript. 
	var spaceCheck = emailArg.search(" ");
	var validation = true;
	
	// if ((check > -1 && (doubleCheck === check)) && (periodCheck > -1) && (spaceCheck < 0)) {
		// var validation = true;
	// } else {
		// var validation = false;
	// }
	// return validation;
// };
// 
// var validated = emailCheck(email);
// console.log("It is " + validated + " that this is a valid e-mail address.");



	