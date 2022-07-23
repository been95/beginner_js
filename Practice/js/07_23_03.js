const pets = [
  {
    type: "dog",
    name: "milk",
    age: 2,
    size: "big",
    pure: true,
    babies: ["berry", "banana", "melon"],
  },

  {
    type: "cat",
    name: "choco",
    age: 3,
    size: "small",
    pure: false,
  },
  {
    type: "parret",
    name: "rainbow",
    age: 8,
    size: "small",
    pure: true,
  },
];

const animals = ["sealion", "wale", "bird"];

for (let i = 0; i < animals.length; i++) {
  //console.log(animals[i]);
}

let myPets = [];
// My pets name are milk, choco, rainbow.
for (let i = 0; i < pets.length; i++) {
  // myPets += pets[i].name;
  myPets.push(pets[i].name);
}

console.log(`My pets name are ${myPets}`);
console.log(typeof myPets, myPets);
//console.log(pets.length, pets[0].name, pets[1].name);

let a = 3;
a += 3;
console.log(a);
