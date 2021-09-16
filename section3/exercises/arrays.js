/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla"
console.log(animals);
// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
console.log(animals.push("Cheetah"));
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals[4] = "Elephants";
console.log(animals);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Waffles", "Chicken", "Sandwhich", "Pizza", "Spaghetti"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
console.log(foods.unshift("Broccoli"));
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
var moreFoods = ["Croissant", "Ice Cream", "Cookie"];
var newFoods = (foods.concat(moreFoods));
console.log(newFoods);
// YOU DO: Remove the food that is in index position 0.
newFoods.shift();
console.log(newFoods);

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Not a web application example but a 2-dimensional example of an array in real life would be a carton
// of eggs. It is a collection of the same data type. The carton is the array, the eggs are elements.

// 2: Any music streaming service is an example of an array. My "roadtrip" playlist would be the array, with
// 20 hours worth of songs in the playlist would be the elements. P.S. most of that is Taylor Swift ;)

// 3: A website that a school district uses for grading. One teacher enters all the grades from the class
// and then those grades are held in an array that then has a function that calculates the overall grade
// of that class. The school would store all the overall class grades in an array and then calculate a
// students GPA based on that.


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here

if (percentBatteryLeft < 15) { // the condition is checking if the battery has less than 15% remaining - which is true
  if ((chargerType === "car") && hasCharger) { // a nested condition in case the first condition failed, which will check if hasCharger=true AND chargerType="car" (note: both must be met because it's a logic operator)
    console.log("I can call an uber"); // since BOTH conditions were met, the user can call an uber
  }
else {
  console.log("I cannot call an uber"); // out of nested condition... if previous tests fail, user cannot call uber
} // you can test the logical operator above by changing either var hasCharger=false OR chargerType="outlet", if either fail the test then it will not work and the user cannot call an uber
};


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
