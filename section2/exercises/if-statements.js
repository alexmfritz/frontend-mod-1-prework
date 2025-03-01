/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


// EXAMPLE:Manipulate the variable 'weather' to see if you can print something other
  // than 'coat'.

var weather = 'snowy';
// var weather = 'icy';
// var weather = 'rainy';
// var weather = 'sunny';
// While working through this example, I would toggle which variable declaration is
// commented in/out and run the program in node several times to observe the output.

if (weather == 'sunny') {
  console.log('sunscreen');
} else if (weather == 'rainy') {
  console.log('umbrella');
} else if (weather == 'snowy') {
  console.log('coat');
} else if (weather == 'icy') {
  console.log('yak traks');
} else{
  console.log('good to go!');
};

/*
YOU DO:
Using the dogAge variable defined below,
determine if a dog is a puppy (2 or younger),
an adult, or elderly (10 or older).

Log to the console the appropriate age range
(puppy, adult, elderly).
*/

var dogAge = 3;
// Write your conditional here
if (dogAge <= 2) {
  console.log("the dog is a puppy!");
} else if (dogAge == 3) {
  console.log("the dog is an adult!");
} else if (dogAge >= 10) {
  console.log("the dog is elderly!");
};

/*
YOU DO:
Using the numQuarters variable defined below, determine
if you have enough money to buy a gumball. A gumball costs
two quarters. Right now, the program will log
out both "I have enough money for a gumball" and
"I don't have enough money for a gumball". Write
a conditional statement that ONLY logs one or the
other.

You should be able to change num_quarters and achieve these outputs:
When numQuarters = 0, program should log "I don't have enough money for a gumball"
When numQuarters = 1, program should log "I don't have enough money for a gumball"
When numQuarters = 2, program should log "I have enough money for a gumball"
When numQuarters = 3, program should log "I have enough money for a gumball"
*/

var numQuarters = 0;

// Write your conditional here
if (numQuarters == 0) {
  console.log("I don't have enough money for a gumball");
} else if (numQuarters == 1) {
  console.log("I don't have enough money for a gumball");
} else if (numQuarters >= 2) {
  console.log("I have enough money for a gumball");
};


/*
YOU DO:
Using the variables defined below, determine if you have the
ingredients to make a pizza. A pizza requires at least two cups
of flour and sauce.

You should be able to change the variables to achieve the following outputs:
When cupsOfFlour = 1 and hasSauce = true, your program should log "I cannot make pizza";
When cupsOfFlour = 1 and hasSauce = false, your program should log "I cannot make pizza";
When cupsOfFlour = 2 and hasSauce = true, your program should log "I can make pizza";
When cupsOfFlour = 3 and hasSauce = true, your program should log "I can make pizza";
*/

var cupsOfFlour = 1;
var hasSauce = true;

// Write your conditional here
if (cupsOfFlour == 1 && hasSauce) {
  console.log("I cannot make pizza");
} else if (cupsOfFlour == 1 != hasSauce) {
  console.log("I cannot make pizza");
} else if (cupsOfFlour >= 2 && hasSauce) {
  console.log("I can make pizza");
};

/*
For the last two exercises, an ideal solution probably uses a logical operator.
Did yours? Do you know what a logical operator in JavaScript is? Google it to answer
for yourself!

ANSWER: My solution for the gumball did not include logical operators but my solution for
 the pizza did. That being said, I did use >= to determine 2 or more numQuarters and 2 or more cupsOfFlour
 so I didn't need a fourth line of code.
 A logical operator is used to connect two or more boolean values/expressions via "AND", "OR", "NOT"
 example: 1 cup of flour AND (&&) has sauce, or 1 cup of flour NOT has sauce
*/
