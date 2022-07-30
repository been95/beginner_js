const data = todos;
console.log(data[0].title);

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].title);
// }
let count = 0;
for (let i in data) {
  document.write(`<li>${data[i].title}</li>`);
  console.log(data[i].completed);
  if (data[i].completed === true) {
    count += 1;
  }
}

console.log(`Completed count : ${count}`);
