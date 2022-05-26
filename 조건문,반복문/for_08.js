let lotto = [];

for(let i=0;i<6;i++){
    //floor() : 내림처리해서 정수로 변경
    var num = Math.floor(Math.random() * 44) + 1;

    for(let j in lotto){
        if(num == lotto[j]){ //현재 새로나온 숫자가 기존 숫자와 같으면
            num = Math.floor(Math.random() * 44) + 1;
        }
    }


    //push() - 배열에 마지막에 값추가메서드
    lotto.push(num);
}

//오름차순으로 숫자 정렬
lotto.sort(function(a,b){
    return a - b;
});

//문서에 출력
document.write('이번주 로또 번호 : ' + lotto);