## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

* I loved the blog posts because they each gave a slightly different taste to the same sentiment: ask questions! Historically, I think that I am someone who will never ask for help because, not because I'm afraid of failure, but because I'm stubborn and I know I COULD figure it out eventually if I kept trying.

* No matter what though, learning to ask for help at the right time and doing so effectively will only positively impact my time at Turing and moving forward into a career in the field.

2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

* I might have noticed a little less step-by-step instruction during the functions exercises, but it did not make me feel too uncomfortable. There was a lot more note taking during section2 which probably is why I felt comfortable doing the exercises, because there was more opportunity to retain information. Both the John Duckett book and the video in the functions exercises really helped by providing some cool diagrams.

3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

* A conditional is a command used for handling decisions. They can perform different computations or actions depending on the value of a boolean being True or False. These decisions can/will change the control flow.

* A daily life conditional example:
Check am I hungry? If yes/True, then I eat food. If no/false, then I do not eat food.

* A web application example:
A weather app likely uses a nested if statement, meaning:
They check for the values of the variables TEMP and PRECIP (if you want to get really fancy... HUMIDITY, WIND, etc)
IF TEMP <= 32 && PRECIP = HIGH %
  THEN SHOW IMAGE OF SNOW
ELSE IF TEMP < 32 && TEMP > 50 && PRECIP = HIGH %
  THEN SHOW IMAGE OF CLOUDS + RAIN
ELSE IF TEMP < 50 && PRECIP = LOW %
  THEN SHOW IMAGE OF SUN


4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

* Multiple conditions in an if statement would either be 'else if' + else, or potentially a nested 'if' statement

* Non-nested: A program would read the conditions from top to bottom, meaning if the first condition is met then it will execute the action within that condition. If the first condition is NOT met, it would continue to the next condition (ELSE IF) and check if that condition is met. If second condition is met, it will execute that action. If none of the conditions are met, it will perform whatever action is included in the ELSE condition (if there is one - but it is not required).

* Nested: Similarly, a program would read the first/top condition. If that condition is met, it will continue to the nested if statement found within that first condition. If the nested condition is also met, it would execute that action.

5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

* If you want to check that TWO or more conditions are met, ideally the developer would use a LOGICAL operator (AND, OR, NOT). Logical operators allow for you to say things like:

if conditionOne && (AND) conditionTwo
  then execute this
else if conditionOne || (OR) conditionTwo
  then execute this instead
else if conditionOne != (NOT) conditionTwo
  then finally execute this
else (if no conditions above are met)
  only perform this

6. What questions do you still have about `if` statements and/or functions?

* Can you use elif in JavaScript instead of else if? (I went and tested - the answer is no)

* Comparisons section encourages the use of === over == because it's strictly equal vs loose equal, it seems like both are effective and can be used regularly. For example Number data type 4 vs string data type "4" will be true with ==, but false with ===. Why encourage always using === if there is a time and place for both?
