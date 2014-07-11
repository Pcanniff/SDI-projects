//alert("JavaScript works!");

/*
 	 Philip A. Canniff
 	 SDI 1407
 	 Lecture 2
 */
//These are my variables.
var myHomeAddress = "111 Autumn Breeze Way";
var myFavoriteStore = "\"Costco\"Superstore";
var milesToStore = 6;
var construction = true; 
var accident = false;

//confirm
construction = confirm("Is there construction?");
myFavoriteStore = prompt("What is your favorite store?", "Costco");
milesToStore = prompt("How far is it to the store?", "8");
milesToStore = parseInt(milesToStore);

//These are my outputs.
console.log("I live at " + myHomeAddress + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It is", milesToStore, "miles to the store.");
console.log("It is", construction, "that there is construction.");

console.log("Construction is " + construction + ".");



