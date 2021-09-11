Array Methods Research

1. array.push() - adds one or more elements to the end of an array, returns new length

var fruits = ["Apple", "Banana"];
console.log(fruits.push("Peach")); //return: 3
console.log(fruits); //return = ["Apple", "Banana", "Peach"]


2. array.pop() - removes the last element from the end of the array, returns remaining element

var fruits = ["Apple", "Peach"];
  fruit.pop();
  console.log(fruits); //return = ["Apple"]

3. array.shift() - removes first element from array, returns that element

var fruits = ["Apple", "Peach"];
  fruits.shift();
  console.log(fruits); //return = ["Peach"]

4. array.shift() - adds one or more element to the beginning of an array, returns the new length of the Array

var fruits = ["Apple", "Peach"];
console.log(fruits.unshift("Banana")); //return = 3
console.log(fruits); //return = ["Banana", "Apple", "Peach"]
