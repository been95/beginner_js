const members = [
  {
    id: 1,
    name: "shon",
    age: 30,
    job: "doctor",
  },
  {
    id: 2,
    name: "mike",
    age: 28,
    job: "teacher",
  },
  {
    id: 3,
    name: "jeni",
    age: 14,
    job: "student",
  },
];

// const animals = ["sealion", "wale", "bird"];

// for (let i = 0; i < animals.length; i++) {
//   //console.log(animals[i]);
// }

// let myPets = [];
// // My pets name are milk, choco, rainbow.
// for (let i = 0; i < pets.length; i++) {
//   // myPets += pets[i].name;
//   myPets.push(pets[i].name);
// }

// console.log(`My pets name are ${myPets}`);
// console.log(typeof myPets, myPets);
// //console.log(pets.length, pets[0].name, pets[1].name);

// let a = 3;
// a += 3;
// console.log(a);

console.log(members[0].age);
for (let i = 0; i < members.length; i++) {
  console.log(members[i].age);
  if (members[i].age <= 18) {
    console.log(`${members[i].name} is not adult`);
  }
}
