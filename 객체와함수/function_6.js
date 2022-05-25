const pets = ["dog", "cat", "rabbit", "hamster", "pig"];
const food = ["Coke","pizza","hamburger","ramen","steak"];
const dash = "------------------------------------------";
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

for (alphabet of food) {
  document.write(alphabet + "<br>");
}

food.forEach(function (alphabet) {
  console.log(alphabet);
});

console.log(dash);

pets.forEach(function (arr) {
  console.log(arr);
});

console.log(dash);

for (pet of pets) {
  console.log("hello" + pet);
}
console.log(dash);

for (i in pets) {
  console.log(i);
}
