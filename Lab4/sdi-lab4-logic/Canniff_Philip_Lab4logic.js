//  NAME:  Philip A. Canniff
//  DATE:  07/14/2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators


// BELOW ARE THE OPERATORS


// var p;
// var q;
// var r;
// 
// var i = 0;
// 
// while (i < 8) {
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// r = confirm("Third value: Click OK for true or Cancel for false.");
// 
// if (p || (q || r)) {
    // console.log("With " + p + ", " + q + "and, " + r + ", the outcome is TRUE.");
// } else {
    // console.log("With " + p + ", " + q + "and, " + r + ", the outcome is FALSE.");
	// }
	// i++;
// }


// WORD PROBLEM ONE

// here are my variables
var movieTicket = 12;
var age = 0;
// here is my parsed prompt for age of consumer.
age = parseFloat(prompt("How old are you?", "25"));
// here is my operator
if (age > 54 || age < 10 ) {
	
	//here is my output
	(movieTicket = 7);
	console.log("Since you are", age, "years old, your ticket cost is:", movieTicket, ".");

} else {
	// here is my else
	console.log("Since you are", age, "years old, your ticket cost is:", movieTicket, "."); 
	
}

// WORD PROBLEM TWO

// here are my variables
var one = 32;
var two = 32;
var three = 30;
var four = 30;

//here are my prompts

one = parseFloat(prompt("How much psi is in tire one?", "32"));
two = parseFloat(prompt("How much psi is in tire two?", "32"));
three = parseFloat(prompt("How much psi is in tire three?", "30"));
four = parseFloat(prompt("How much psi is in tire four?", "30"));

// here is my conditional
while (one == two && three == four) {
	
	console.log("Your tires are good!");
	break;
	
} if (one != two || three != four) {
	
	console.log("Imbalance of tire pressure!");
	
}



