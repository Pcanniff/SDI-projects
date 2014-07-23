/*
 * 	Philip A. Canniff
 * 	SDI 1407
 * 	Lee Lewis
 * 	Lab 7
 */

var firstHero;
var secondHero;
var thirdHero;
//Here is my constructor function and internal methods.
var heroConstructor = function(heroName, heroUniverse, heroPower, heroPublication) {

	this.name = heroName;
	this.universe = heroUniverse;
	this.power = heroPower;
	this.publication = heroPublication;
};
//Here is my loop and object creation.
var heroFunction = function() {

	for (var index in superData.superheroes) {

		if (index == 0) {
			firstHero = new heroConstructor(superData.superheroes[index].name, superData.superheroes[index].universe, superData.superheroes[index].power, superData.superheroes[index].publication);

		} else if (index == 1) {
			secondHero = new heroConstructor(superData.superheroes[index].name, superData.superheroes[index].universe, superData.superheroes[index].power, superData.superheroes[index].publication);

		} else {
		}
	}
	thirdHero = new heroConstructor(superData.superheroes[index].name, superData.superheroes[index].universe, superData.superheroes[index].power, superData.superheroes[index].publication);

};
//Here my function is outputted and my meaningful outputs are created.
heroFunction();
console.log(firstHero);
console.log(firstHero.name + " first appeared in " + firstHero.publication + " with the power of " + firstHero.power + ".", "They belong to the " + firstHero.universe + " universe.");
console.log(secondHero);
console.log(secondHero.name + " first appeared in " + secondHero.publication + " with the power of " + secondHero.power + ".", "They belong to the " + secondHero.universe + " univese.");
console.log(thirdHero);
console.log(thirdHero.name + " first appeared in " + thirdHero.publication + " with the power of " + thirdHero.power + ".", "They belong to the " + thirdHero.universe + " universe.");

