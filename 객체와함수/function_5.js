let arr = "ABCD";	
console.log("ABCD에서 B가 있는 INDEX");
console.log(arr.indexOf("B")) 

let arr2 ="ABCDA";
console.log("ABCDA에서 A가 있는 index(뒤에서 시작)");
console.log(arr2. lastIndexOf("A"))

let arr3="aBAbc";
console.log("일반 indexof와 대문자를 부별하지 않는 indexof");
console.log(arr3.indexOf("A")) 
console.log(arr3.toUpperCase().indexOf("A")); 

let arr4 =["Apple", "Banana", "Cherries"];
console.log("배열 중에서 값이 위치한 인덱스 확인");
console.log(arr4.indexOf("Banana"));
console.log(arr4.indexOf("Pineapple"));

let arr5 = "ABCA"	
console.log("2번째 값을 찾는 indexOf");
console.log(arr5.indexOf("A", arr5.indexOf("A") + 1)); 

let arr6 = "AABBCCAA"; 
	
	console.log("A값이 위치한 곳 확인");
	for(var i = 0; i<arr6.length;) {
		console.log(arr6.indexOf("A", i));
		if(i == -1) {
			i++; // 일치하는 값이 없을 시 증가
		} else {
			i = arr6.indexOf("A", i) + 1; // 중복 값 출력 방지용
		}
	}