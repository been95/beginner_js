let drink = prompt("가격 조회를 원하는 음료수를 입력하세요.( 콜라, 사이다, 커피 中 택1)", "");

//switch 조건문
switch (drink) {
  case "콜라":
    document.write("800원");
    break;

  case "사이다":
    document.write("900원");
    break;

  case "커피":
    document.write("700원");
    break;

  default:
    document.write("잘못된 단어 입력");
}
