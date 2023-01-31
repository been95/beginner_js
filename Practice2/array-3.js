let stu1 = ["html", "css"];
let stu2 = ["javascript", "jquery", "css"];
let stu3 = ["typescript", "html", "css"];

stu1.push("sass");

let lists = [...stu1, ...stu2, ...stu3];

let result = stu1.map((x) => x + " is requested.");

console.log(result);
