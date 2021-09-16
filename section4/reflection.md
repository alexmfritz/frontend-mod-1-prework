## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

- My workflow didn't feel too much different this week, as I have been doing my best to follow the Pom technique for studying and homework since you mentioned it in the first Zoom class. I have been doing 1 hr of work time, with 10-15 minutes of break time in between because it feels a lot more productive than the 25/5 method.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

- I don't believe using Step 1 "Decide on the task to be performed" really changed the outcome on the work session. I fully agree that it's good to be object/goal oriented, but sometimes resetting Step 1 on a particularly long section of a project seems counterproductive. I would say that I was pretty focused.

3. What is an Object, and how is it different from an Array in Javascript?

- Arrays are used for storing an ordered list of data, each data value is called an element, and that element can only be accessed by a number or the index of the item.
  * ex: `var animals = ["zebra", "elephant", "cat"]` therefore `animals[2] = cat`
- Objects are used for storing a more complex collection of data, such as **key-value pairs**, but they can be accessed by Strings opposed to numbers.
  * ex:
```
var octopusInfo = {
  name: "Susie",
  legs: 8
};
```
therefore `animals.name = "Susie"`

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    - Easy/better answer: an array because all you are collecting is their name.
      - ex:
```
var studentNames = ["John", "Susie", "Harry"];
```
or
```
var students = ["John Smith", "Jane Doe", "Harry Potter"];
```

    - Complicated answer: an object would also work here depending on what you wanted to do with the information.
      - ex:
```
var studentInfo = {
  firstName = "John",
  lastName = "Smith"
};
```
and you could reassign values to `studentInfo.firstName = "Harry"` and `studentInfo.lastName = "Potter"` if you wanted to.

  * List of states and their capitals
    - My answer is the same as student names. What do you want to do to the data? An array would be easier, but if you wanted to run complicated functions/methods on the "capital, state" format and store more information regarding the state, than an object would be better.

  * List of things to pack for vacation
    - I would choose an object for this because within the object you could have many key-value pairs with the key representing a category like "toiletries", "shirts", "pants", and the values for each pair containing an array of items that fit that category.
    - ex:
```
var packingList = {
  toiletries: ["toothbrush", "toothpaste", "razor", "shaving cream", "face wash", "ibuprofen", "contacts"],
  pants: ["black jeans", "blue slacks", "cargo shorts", "basketball shorts", "swim trunks"],
  shirts: ["yellow polo", "blue tank top", "flamingo shirt", "white button-up"]
};
```

  * Names of all the Instagram accounts I follow
    - I honestly think using array for this would be just find because you would just use the title of all the accounts in a String in the array and then you have a huge list of array.methods() that you could use to alphabetize, etc.

  * List of student names and their cohort
    - I would use an object for this with key-value pairs for: firstName, lastName, program, cohort)

  * Ingredients and amount of each ingredient to bake a cake
    - I would use an object for this because you are getting into really complicated data values that all vary depending on the ingredient.

  * All my favorite restaurants
    - Probably just an array because all you need to do is collect the names of each restaurant. If you wanted to also store the type of food they serve AND your favorite dish at each, you could do an object instead.

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
  - A application I have used frequently in the **past** would be Tinder.
  - ex:
```
var tinderProfile = {
  profilePhotos = [<imgFile>, <imgFile>, <imgFile>],
  firstName: "John",
  location: "lives in <cityName>",
  distanceFrom: x + " miles away",
  age: 32,
  bio: "ENTER LONG STRING OF CLICHE TEXT HERE",
  hobbyKeyWords: ["Climbing", "Coffee", "Fishing", "Yoga", "Music"]
  spotify: [ARRAY OF MUSIC],
};
```

6. What questions do you still have about classes and/or Objects?
  - Is there a purpose for declaring a skeleton class with object literals without having anything inside of the class? In the classProperties.js assignment, the hardest part was Part 1 because I was confused around creating the skeleton, defining literals, but not having a purpose for it. Part 2 and 3 was easier once I had properties and parameters/arguments to go along with it.
