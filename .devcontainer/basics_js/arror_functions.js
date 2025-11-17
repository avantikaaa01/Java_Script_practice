// Convert this normal function into an arrow function:
// function double(n) {
//   return n * 2;
// }

// const double = n => n *2;
// console.log(double(5));

// Q1: Convert this normal function into an arrow function:
// function square(x) {
//     return x * x;
// }
// const square = x => x * x;
// console.log(square(3));

// Q2: Write an arrow function that returns an object:

// Return this object:
// { name: "Avantika", skill: "MERN" }

// const getuser = () => ({name: "Avantika", skills: "MERN"});
// console.log(getuser());

// Q3.1 — Add 10 to each element

// Input:
// const arr = [2, 4, 6];

// const arr = [2, 4, 6];
// const result = arr.map(n => n + 10);
// console.log(result);

// Convert each number to its square using map()
// Input:
// const nums = [3, 5, 7];
// Output:
// [9, 25, 49]

// const nums = [3,5,7];
// const result = nums.map(n => n * n);
// console.log(result);

// Convert array of strings to uppercase
// Input:
// const fruits = ["apple", "mango", "banana"];
// Output:
// ["APPLE", "MANGO", "BANANA"]

// const fruits = ["apple", "mango", "banana"];
// const result = fruits.map(n => n.toUpperCase());
// console.log(result);

// Q4.1 — Get only even numbers
// Input:
// [1, 2, 3, 4, 5, 6]
// Output:
// [2, 4, 6]

// const arr = [1,2,3,4,5,6];
// const result = arr.filter(n => n % 2 ==0);
// console.log(result);

// Get numbers greater than 10
// Input:
// [5, 12, 8, 20, 3]
// Output:
// [12, 20]

// const num = [5,12,8,20,3];
// const result = num.filter(n => n > 10);
// console.log(result);

// Filter fruits that start with "a"
// Input:
// ["apple", "mango", "banana", "avocado"]
// Output:
// ["apple", "avocado"]

// const fruit = ["apple", "mango", "banana", "avocado"]
// const result = fruit.filter(n => n.startsWith("a"));
// console.log(result);

