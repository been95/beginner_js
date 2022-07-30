const numbers = [10, 20, 30, 40, 50];
let result = 0;

for (let num of numbers) {
  result += num;
}

console.log(result);
result = 0;

for (let index in numbers) {
  result += numbers[index];
}

console.log(result);
