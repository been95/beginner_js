let num = prompt("원하는 정수를 입력해주세요.", "");

//switch 조건문 홀/짝 맞추기
switch (num % 2) {
  case 0:
    document.write("입력한 숫자는 짝수입니다.");
    break;

  case 1:
    document.write("입력한 숫자는 홀수입니다.");
    break;

  default:
    document.write("정수값을 입력해주세요.");
}
