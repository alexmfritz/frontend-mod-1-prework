// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "The Crime Stopper";
var specialAbility = "Fire blast!";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Greetings " + heroName;
var catchphrase = `Don't make me use my ${specialAbility} on you!`;

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
var fullPower = power * 500;
var fullEnergy = energy + 150;
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
var archEnemies = ["Aragog", "Gru", "Squidward", "Smeagle", "Durza", "Jane"];
var sidekicks = ["Blossom", "Cosmo", "Johnny Bravo", "Scooby", "Sirius", "Percy"];
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[5]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("The Joker");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard Pass");
  } else {
    console.log(saveTheDay);
  }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(99, announcement, excuse);
assessSituation(21, announcement, excuse);
assessSituation(3, announcement, excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "The Cookie Monster",
  smell: "thin mints",
  weight: 385,
  citiesDestroyed: ["Seattle", "Denver", "Monte Carlo", "Paris"],
  luckyNumbers: [4, 13, 21, 93, 656],
  address: {
    number: 1009,
    street: "N 109th St",
    state: "Seattle, WA",
    zip: 98133
  }
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemisis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(x) {
    this.powerLevel += x;
  }
};

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var crimeStopper = new SuperHero("The Crime Stopper", specialAbility, 185);
console.log(crimeStopper);
crimeStopper.maximizeEnergy();
crimeStopper.sayName();
crimeStopper.gainPower(35);
console.log(crimeStopper);
var captainFalcon = new SuperHero("Captain Falcon", "Falcon punch!", 35);
console.log(captainFalcon);
captainFalcon.maximizeEnergy();
captainFalcon.sayName();
captainFalcon.gainPower(2000);
console.log(captainFalcon);


// Reflection
// What parts were most difficult about this exerise?
/* ANSWER: The most difficult part of the exercise for me was making sure the class method gainPower
took an argument of a number in order to increase the powerLevel data value. Creating the methods within the
class is probably something that would be nice to practice*/

// What parts felt most comfortable to you?
/* Most of the exercise felt pretty dang comfortable to me because all the directions were laid out extremely
well and easy to follow. */

// What skills do you need to continue to practice before starting Mod 1?
/* I'd love more practice identical to everything in this modZeroHero.js activity*/
