let a = 1;
 
// if()문과 비슷함 'a'의 값이 10보다 작은동아 반복
while(a < 10){
    
    console.log("a의 시작값 : " + a);
    
    //'a'의 값이 '7'이면 반복문을 빠져 나갑니다.
    if(a == 7){
        console.log("break 시점의 a의 값 : " + a);
        break;
    }
    a++;
}