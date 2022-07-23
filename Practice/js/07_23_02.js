const numbers = [10, 20, 30, 40, 50];
const alphabet = ["a", "b", "c"];

const plus = numbers.concat(alphabet);
// const plus = [...numbers, ...alphabet, 'dd']
console.log(plus);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 10);
}

numbers.forEach((item, index) => {
  console.log(item * item, index);
});

const friends = ["a", "b", "c"];
friends.forEach(function (item, index) {
  console.log(`${item} Hello. Your are my ${index}th friend.`);
});
