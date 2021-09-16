/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
/*class Dog {

};

var dauschund = new Dog();
var corgi = new Dog();

console.log(dauschund);
console.log(corgi);

// Prompt 2: Snack
class Snack {

};
var gummies = new Snack();
var chips = new Snack();

console.log(gummies);
console.log(chips);

// Prompt 3: Shirt
class Shirt {

};
var polo = new Shirt();
var longSleeve = new Shirt();
console.log(polo);
console.log(longSleeve);*/


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*class Dog {
  constructor() {
    this.breed = "chihuahua";
    this.weightLbs = 3.3;
    this.personality = "feisty";
  }
};
var chihuahua = new Dog();
console.log(chihuahua);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.brand = "Doritos";
    this.style = "chips";
    this.texture = "crunchy"
  }
};
var doritos = new Snack();
console.log(doritos);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.style = "polo";
    this.fabric = "polyester";
    this.color = "green";
  }
};
var polo = new Shirt();
console.log(polo);*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, avgWeightLbs, personality) {
    this.breed = breed;
    this.weight = avgWeightLbs;
    this.personality = personality;
  }
};
var chihuahua = new Dog("Chihuahua", "3.3-6lbs", "feisty, hyperactive");
var borderCollie = new Dog("Border Collie", "30-40lbs", "intelligent, athletic");
console.log(chihuahua);
console.log(borderCollie);

// Prompt 2: Snack
class Snack {
  constructor(brand, style, texture) {
    this.brand = brand;
    this.style = style;
    this.texture = texture;
  }
};
var gummyBears = new Snack("Haribo", "gummies", "chewy, dense");
var doritos = new Snack("Doritos", "chips", "crunchy, sharp");
console.log(gummyBears);
console.log(doritos);

// Prompt 3: Shirt
class Shirt {
  constructor(style, fabric, color) {
    this.style = style;
    this.fabric = fabric;
    this.color = color;
  }
};
var polo = new Shirt("polo", "85% cotton, 15% polyester", "navy blue");
var longSleeve = new Shirt("waffle long sleeve", "100% organic cotton", "heather grey");
console.log(polo);
console.log(longSleeve);
