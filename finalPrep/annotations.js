// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { // creating a function that takes the arguments: name, age, fur, clothes, specialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; // variable greeting as String, uses interpolation to combine argument name
  var demographics = [name, age]; // variable demographics holds an array with arguments name, age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //variable powerSaying as String, uses concatenation to combine argument specialPower
  var builtBear = { // var builtBear is an object literal that holds dynamic variables regarding a completed bear
    basicInfo: demographics, // key: basicInfo, value: referencing a previously defined variable holding an array that takes an argument of the function
    clothes: clothes, // key: clothes, value: takes the arguent clothes
    exterior: fur, // key: exterior, value: takes the argument fur
    cost: 49.99, // key: cost, static value: 49.99
    sayings: [greeting, powerSaying, "Goodnight my friend!"], // key: sayings, value: array holding 2 previously defined variables: greeting, powerSaying, and a new String
    isCuddly: true, // key: isCuddly, value: boolean value true
  };

  return builtBear // method returning the object literal buildBear and all it's contained parameters
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// calling the function BuildABear, taking new values for the arguments in the function
/* => BuildABear {
      basicInfo: ["Fluffy", 4],
      clothes: ["pants", "jorts", "tanktop"],
      exterior: "brown",
      cost: 49.99,
      sayings: ["Hey partner! My name is Fluffy - will you be my friend?!", "Did you know that I can give you nightmares?", "Goodnight my friend!"],
      isCuddly: true;
    }
*/
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
// calling the function BuildABear, taking different values than the previous calling of the funtion
/* => BuildABear {
      basicInfo: ["Sleepy", 2],
      clothes: ["pajamas", "sleeping cap"],
      exterior: "purple",
      cost: 49.99,
      sayings: ["Hey partner! My name is Sleepy - will you be my friend?!", "Did you know that I can sleeping in?", "Goodnight my friend!"],
      isCuddly: true;
    }
*/


//FizzBuzz
function fizzBuzz(num1, num2, range) { // function fizzBuzz that takes the arguments num1, num2, range
  for (var i = 0; i <= range; i++) { // for loop that is iterating with the num1 + num2 on the bases of range
    if (i % num1 === 0 && i % num2 === 0) { // if value of (i mod numb1) is EXACTLY equal to 0 AND the value of (i mod numb2) is EXACTLY eqaul to 0, then do
      console.log('fizzbuzz'); // log fizzBuzz to the console
    } else if (i % num1 === 0) { // if above test does not pass, test if value of (i mod num1) is EXACTLY equal to 0 by itself, then do
      console.log('fizz'); // log fizz to the console
    } else if (i % num2 === 0) { // if the two above tests do not pass, test if the value of (i mod numb2) is EXACTLY equal to 0 by itself, then do
      console.log('buzz'); // log buzz to the console
    } else { // IF ALL ABOVE TESTS HAVE FAILS, DO
      console.log(i); // LOG VALUE OF i TO CONSOLE
    }
  }
}

fizzBuzz(3, 5, 100); // iterating from 0 - 100 (incrementing + 1 at a time), first testing if number is a multiple both 3 AND 5 then log "fizzBuzz"
                     // if first test fails, test if iteration number is multiple of JUST 3, then log "fizz" if pass
                     // if both previous tests fail, test if iteration number is multiple of JUST 5, then log "buzz" if pass
                     // if ALL previous tests fail, just log the value of i to the console
fizzBuzz(5, 8, 400);// iterating from 0 - 100 (incrementing + 1 at a time), first testing if number is a multiple both 5 AND 8 then log "fizzBuzz"
                     // if first test fails, test if iteration number is multiple of JUST 5, then log "fizz" if pass
                     // if both previous tests fail, test if iteration number is multiple of JUST 8, then log "buzz" if pass
                     // if ALL previous tests fail, just log the value of i to the console
