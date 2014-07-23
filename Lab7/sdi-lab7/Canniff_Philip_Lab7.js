/*
 * 	Philip A. Canniff
 * 	SDI 1407
 * 	Lee Lewis
 * 	Lab 7
 */

var firstHero;
var secondHero;
var thirdHero;

var heroConstructor = function(heroName, heroUniverse, heroPower, heroPublication) {

	this.name = heroName;
	this.universe = heroUniverse;
	this.power = heroPower;
	this.publication = heroPublication;
};

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

heroFunction();


