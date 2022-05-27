const number = ["zero", "one", "two", "three", "four"];
number.pop();//배열의 마지막 요소를 제거한 후 제거한 요소를 반환
console.log(number);
number.shift();//배열의 첫번째 요소를 제거한 후 제거한 요소를 반환
console.log(number);
number.push("five");//배열의 마지막에 새로운 요소를 추가한 후 변경된 배열의 길이를 반환
console.log(number);
number.unshift("number"); //배열의 첫 번째 자리에 새로운 요소를 추가한 후 변경된 배열의 길이를 반환
console.log(number);
number.splice(1, 2, "six", "seven");//배열의 특정 위치에 배열요소를 추가하거나 삭제하는데 사용
console.log(number);
