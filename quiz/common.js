// 004.html
const changeBodyColor = () => {
  const bodyColor = document.querySelector(".bodyColor");

  if (!bodyColor) {
    return false;
  }
  const h1 = document.querySelector("h1");
  console.log(h1.textContent);
  const text = document.querySelector("select");
  const button = document.querySelector("button");
  const body = document.body;
  text.style.border = "2px solid plum";

  const setBg = () => {
    body.style.backgroundColor = text.value;
    h1.textContent = `Body Color is : ${text.value}`;
  };

  setBg();
  button.addEventListener("click", setBg);
  text.addEventListener("change", setBg);
};

// 005.html
const login = () => {
  const userInfo = document.querySelector(".user-info");
  if (!userInfo) {
    return false;
  }
  const id = document.querySelector(".id");
  const name = document.querySelector(".name");
  const button = document.querySelector("button");
  const memo = document.querySelector(".memo");

  const loginCheck = () => {
    const text = id.value;
    const nickname = name.value;

    if (text === "" || nickname === "") {
      memo.textContent = "Write !";
      return false;
    }

    memo.textContent = `${text}님 ${nickname}으로 로그인 되었습니다`;
  };

  button.addEventListener("click", loginCheck);
};

changeBodyColor();
login();
