let arr = [1, true, "JavaScript"];
    function printArr(value, index, array) {
        document.write("arr[" + index + "] = " + value + "<br>");
    }

    arr.forEach(printArr);	// 배열 arr의 각 요소마다 printArr() 함수가 호출됨.