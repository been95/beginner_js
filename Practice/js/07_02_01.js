const animals = ["cat", "dog", "parret"];
const fruits = ["banana", "apple", "mango"];
const newArray = animals.concat(fruits);
console.log(newArray, typeof newArray);

const newArray2 = [...animals, "wale", ...fruits, "berry"];
console.log(newArray2);

const friend1 = {
  name: "bts",
  type: "group",
  job: "singer",
  age: 23,
  level: "silver",
  count: 7,
};
const friend2 = {
  name: "jeny",
  type: "solo",
  job: "singer",
  age: 20,
  level: "gold",
};

const job = {
  company: "SK",
  location: "seoul",
};
const newFriend1 = { ...friend1, ...job };
console.log(newFriend1);

friend2.name = "Amy";
friend2.tall = 180;

const friends = [friend1, friend2];
console.log(friends);
