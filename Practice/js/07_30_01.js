const numbers = [1, 2, 3, 4, 5];

let result = 0;
numbers.forEach((item) => {
  result += item;
});
document.write("forEach item :", result);

result = 0;
for (i = 0; i < numbers.length; i++) {
  result = result + numbers[i];
}

console.log(result);

const sum = numbers.reduce((total, value, index) => {
  console.log(total, value, index);
  return total + value;
}, 10);

console.log(sum);

const multiply = numbers.reduce((a, b) => a * b);
console.log(multiply);

// console.log(getSum([1, 50, 80, 23]));

// function getSum(numbers) {
//   return numbers.reduce((a, b) => a + b);
// }

// const getSum = (numbers) => {
//   return numbers.reduce((a, b) => a + b);
// };

// console.log(getSum([1, 2, 3]));

const getSum = (numbers) => {
  console.log(numbers);
  return numbers.reduce((a, b) => a + b);
};

const num = [5, 15, 25, 35, 45];
console.log("result : ", getSum(num));

const getSum2 = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
};

console.log(getSum2(3, 8, 39, 30));

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = b.concat(a);
console.log(c, typeof c);
const d = [...a, 10, ...b];
console.log(d);
