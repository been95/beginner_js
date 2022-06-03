let candidate = Array(45).fill().map(function(element, index) {
    return index + 1;
});

console.log(candidate);

let shuffle = [];
while (candidate.length > 0) {
    let value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(value);
}

console.log(shuffle);

let win = shuffle.slice(0, 6);
let bonus = shuffle[shuffle.length - 1];

console.log('Win number :', win.sort(function (p, c) {return p - c}), 'bonus :', bonus);


let result = document.getElementById('result');

function ballCSS(number, result) {
    let ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100%'; // JS에서는 -가 '빼기'이므로 camel표기법으로 대체
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.padding = '10px';
    ball.style.margin = '10px';
    let backGroundColor;
    if (number <= 10) {
        backGroundColor = 'red';
    } else if (number <= 20) {
        backGroundColor = 'orange';
    } else if (number <= 30) {
        backGroundColor = 'yellow';
    } else if (number <= 40) {
        backGroundColor = 'blue';
    } else {
        backGroundColor = 'green';
    }
    ball.style.background = backGroundColor;
    ball.style.fontWeight = 'bold';
    result.appendChild(ball);
}

setTimeout(function printTime() { // 비동기 콜백 함수
    ballCSS(win[0], result);
}, 1000); // 1000 밀리초 = 1 초

setTimeout(function printTime() {
    ballCSS(win[1], result);
}, 2000);

setTimeout(function printTime() {
    ballCSS(win[2], result);
}, 3000);

setTimeout(function printTime() {
    ballCSS(win[3], result);
}, 4000);

setTimeout(function printTime() {
    ballCSS(win[4], result);
}, 5000);

setTimeout(function printTime() {
    ballCSS(win[5], result);
}, 6000);

setTimeout(function printTime(){
    let bonusHTML = document.getElementsByClassName('bonus')[0];
    ballCSS(bonus, bonusHTML);
}, 7000);