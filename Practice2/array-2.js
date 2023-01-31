let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1, 4, 9, 16, 25, 36

let scores = [30, 50, 90, 25, 10, 95, 85];

let double = numbers.map((num) => num * num);
console.log(double);

let two = numbers.map((num) => num * 2);
console.log(two);

console.log(3 % 2, 18 % 2);

let one = numbers.filter((number) => number % 2 === 0);
console.log(one);

//let total = numbers.reduce((total, current) => total + current, 0);
//console.log(`total : ${total}`);

let total = scores.reduce((total, current) => total + current);
let avg = total / scores.length;
console.log(`total: ${total}, Average : ${avg}`);
