alert("Psyche is trapped in a tree!");

//These are my variables.
var surfaceTemp = "110 degrees Farenheit"; 
var whereIsPsyche = "Planet \"Dryad\"";
var psychesAge = 19;
var soiler = true;
var water = false; 

//These are my output
console.log("Psyche lives on", whereIsPsyche, ".");
console.log("Psyche is", psychesAge, "years old.");
console.log("The surface temperature on Dryad is", surfaceTemp, ".");
console.log("It is", soiler, "that there is a soiler below her."); 
console.log("It is", water, "about there being water nearby."); 


//confirm
soiler = confirm("Will the soiler wait forever?");

//prompt
psychesAge = prompt("How old will Psyche be in 5 years?", "19");

//parse
psychesAge = parseInt(psychesAge);

//These are my output
console.log("Psyche will be", psychesAge, "in 5 years.");
console.log("It is", soiler, "that the soiler will stay forever."); 

