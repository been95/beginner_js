function ckeckOdd(number) {
  //매개변수가 있는 함수
  var number = prompt("숫자를 입력해주세요.");
  if (number % 2) {
    document.write(number + "는 홀수입니다.<br/>");
  } else {
    document.write(number + "는 짝수입니다.<br/>");
  }
}
//사용자로부터 값을 입력
var number = prompt("숫자를 입력해주세요.");
ckeckOdd(number); //함수 호출

number = prompt("숫자를 입력해주세요.");
ckeckOdd(number);
