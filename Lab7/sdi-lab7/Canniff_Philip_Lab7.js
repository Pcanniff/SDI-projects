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
