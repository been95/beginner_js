const nature = ["나무", "꽃", "날씨", "날씨"];
nature.push("바다");
nature.unshift("산");
nature.splice(2, 0, "나비");
console.log(nature);
console.log(nature.lastIndexOf("날씨"));
console.log(nature.includes("꽃"));

const a = [1, 2, 3, 4, 5, 6, 7];
const b = a.slice(0, 2); //1, 2
console.log(a, b);

const c = [...a, "flower", ...nature];
console.log(c, typeof c);
