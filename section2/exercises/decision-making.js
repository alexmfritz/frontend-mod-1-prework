/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
};

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
};

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
ANSWER: Lines 14-18 include a conditional, an IF-THEN-ELSE statement based on which door is chosen. This changes
the control flow of the story, specifically for the variable bearClothing. If doorChoice is 1, the bear wears the hat,
otherwise (door 2 is the only other option... so it's just an IF-ELSE, no ELSE IF) a scarf is worn.

2. What variable has a new value assigned to it after the first if statement executes?
ANSWER: var bearClothing has a new value assigned after the if statement is executed.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
ANSWER: bearClothing = "scarf" because either the doorChoice is EXACTLY equal to 1 or else everything else executes
the scarf being worn.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
ANSWER: Lines 17-35 includes a new conditional revolving around the fact that the bearClothing choice from the previous section
of the story is too small. The new conditional will decide to either execute offering the bear your own clothing, telling the
bear something mean, running away from the bear, OR if no option is chosen you remain with the bear to become friends. This
is an IF-THEN-ELSE statement that includes if, else if, and else conditions in order to complete the final seciton of the story.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
ANSWER: "You run as fast as you can into the next room. It's full of snakes!" (probably not the best outcome)

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
ANSWER:
  a) "You see the Bear putting on a hat"
  b) "It looks like the hat is too small for the bear, do you...?"
  c) "You tell the bear the hat is too small and it starts to cry!"

You tell the bear the hat you saw it put on was too small for it, so the bear begins to cry.

7. What is your favorite ending?
ANSWER: My favorite ending would be if the bear put on a scarf and you offered them your scarf instead and then they show you
the secret passage out!
*/
