alert("Don't wake the dragon!");
/*
		Philip A. Canniff
		SDI 1407
		07/14/2014
		Deliverable 1 (Lab 3)
 */
var dragonType = ("Fire")
var dragonColor = ("Firey \"Red\"");
var dragonLength = 42;
dragonhealth = true

	console.log("There is a", dragonType, "Dragon.");
	console.log("It is a", dragonColor, ".");
	console.log("It is", dragonLength, "feet long.");
	console.log("Is is", dragonhealth, "that the dragon is awake!");
	
dragonhealth = confirm("Is the dragon awake?");

if (dragonhealth === true)
{
	console.log("It is", dragonhealth, "that the dragon is awake!");
	//String Conditional
	dragonColor = prompt("What color is the dragon?");
	if (dragonColor === "Red")
	{
		//Concatenation and Output D
		console.log("Ice rained down from the sky and killed the", dragonType, "dragon!");
	}
	else
	{
			//Output C
		console.log("Wrong! The dragon was unaffected and ate you!")
	}
	
	
}
else
{ 
	dragonLength = parseFloat(prompt("How large is the dragon?"));
	console.log("The dragon is", dragonLength, "feet long.");
	if (dragonLength < 42)
	{
		console.log("The dragon is small enough to sneak past!");
	}
	else {console.log("The dragon was too big and ate you!");
	}
	
}

	console.log("At least you were brave!")
