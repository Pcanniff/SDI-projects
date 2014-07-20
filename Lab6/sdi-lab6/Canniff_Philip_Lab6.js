alert("JavaScript works!");

/*
  		Philip A. Canniff
 	 	SDI 1407
 		Lab 6: Working with Arrays
 
 */

var Geo = function() {
	
	States = ["Virignia", "MaryLand", "California", "Kentucky"];
	Capitols = ["Richmond", "Annapolis", "Sacremento", "Frankfort"]; 
	// Outputting my entire arrays to clarify changes.
	console.log(Capitols, States);
	for (i = 0; i < States.length; i++) {
		console.log(Capitols[i], "is the capital of", States[i] + ".");
		
	} 	States.push("Florida");
		Capitols.push("Tallahassee");
		// Outputting my entire arrays to clarify changes. 
		console.log(Capitols[i], "is the capital of", States[i] + ".");
		console.log(Capitols, States);
};
Geo();

