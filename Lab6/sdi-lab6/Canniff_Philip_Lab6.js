alert("JavaScript works!");

var Geo = function() {
	
	States = ["Virignia", "MaryLand", "California", "Kentucky", ];
	Capitols = ["Richmond", "Annapolis", "Sacremento", "Frankfort"]; 
	for (i = 0; i < States.length; i++) {
		
		console.log(Capitols[i], "is the capital of", States[i] + ".");
		
	} 	
		
		States.push("Florida");
		Capitols.push("Tallahassee");
		console.log(Capitols[4], "is the capital of", States[4] + ".");

};
Geo();


