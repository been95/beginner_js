let numbers = [1, 3, 4, 2, 6, 9];
let fruits = ["mango", "banana", "apple", "orange"];
let scores = [30, 50, 90, 25, 10, 95, 85];
//let result = [...number, "hello", ...fruits]

/*
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 4) {
    console.log(numbers[i]);
  }
}
*/

for (let i of numbers) {
  if (i > 4) {
    console.log(`${i} is bigger than 4 about ${i - 4}`);
  }
}

let result = scores.filter((score) => score >= 90);
console.log(result);

let number = numbers.filter((numbers) => numbers > 4);
console.log(number);

let num = numbers.sort();
let newFruits = fruits.reverse();
console.log(newFruits);
