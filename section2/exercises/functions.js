/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};
printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log('Oh, Hello!');
};
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log(name);
};
greetMe('Harry');
greetMe('Hermione');
greetMe('Ronald');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function sum(numOne, numTwo) {
  console.log(numOne + numTwo);
};
sum(2, 5);
sum(2005, 983741);
sum(-94, 85);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function bestFriends(friendOne, friendTwo) {
  console.log(friendOne + ' and ' + friendTwo + ' are BFFS');
};
bestFriends('Oscar', 'Ruck');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN: For the function that takes in 2 numbers as arguments, I named the funciton "sum" because the purpose of
the function was to add two integers together and produce their sum(addition). I named the parameters numOne and
numTwo because I wanted to keep it simple, concise and easy to remember later when giving the function the arguments.

The same can be said for YOU DO🎈 function regarding two strings and concatenation. The result of the console.log();
should be producing a sentence regarding two best friends so the function is named BestFriends. I again kept the naming
of the parameters simple and concise (friendOne and friendTwo) because I would later be defining their names (Oscar and Ruck)
in the name of the argument for the bestFriends function.

Leading into Mod0 I spoke with Kaitlyn a bit about proper naming and she pointed out I used both kebob-case and camelCase on a
project I was working on, encouraged I was consistent with one, and also provided a link to read up on BEM naming convention.
*/
