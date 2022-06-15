let coin = 0; //수중에 가지고 있는 돈상태 0원
document.getElementById("current").innerHTML = coin + "원"; //현재 coin값이 html에 찍히게 함

function color_change(){
    //만약 1000원이상 돈이 들어오묜 모든 제품을 구매 가능 하니 전부 파란색으로 변경하기
    if(coin >= 1000 ){
        document.getElementById("tea").style.color = "blue";
        document.getElementById("coffee").style.color = "blue";
        document.getElementById("water").style.color = "blue";
    }else if(coin >= 700){
        document.getElementById("tea").style.color = "blue";
        document.getElementById("coffee").style.color = "blue";
        document.getElementById("water").style.color = "blue";
    }else if(coin >= 500){
        document.getElementById("tea").style.color = "blue";
        document.getElementById("coffee").style.color = "blue";
        document.getElementById("water").style.color = "blue";
    }else{
        document.getElementById("tea").style.color = "red";
        document.getElementById("coffee").style.color = "red";
        document.getElementById("water").style.color = "red";
    }
};


//버튼1을 클릭하면 현재 금액(coin)에 1000원추가됨
function click_btn1() {
  coin = coin + 1000;
  color_change();
  alert("1000원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn2() {
  coin += 500;
  color_change();
  alert("500원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_btn3() {
  coin += 100;
  color_change();
  alert("100원 넣음");
  document.getElementById("current").innerHTML = coin + "원";
}

function click_coffee() {
  if (coin < 700) {
    alert("돈이 부족합니다");
  } else {
    coin -= 700;
    alert("커피 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_water() {
  if (coin < 500) {
    alert("돈이 부족합니다");
  } else {
    coin -= 500;
    alert("물 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

function click_tea() {
  if (coin < 1000) {
    alert("돈이 부족합니다");
  } else {
    coin -= 1000;
    alert("옥수수수염차 뽑음");
    color_change();
    document.getElementById("current").innerHTML = coin + "원";
  }
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const tea = document.getElementById("tea");
tea.addEventListener("click", click_tea);