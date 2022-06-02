let a = 1;
while(a < 10){
    
    console.log("a의 시작값 : " + a);
    
    if(a == 8){
        console.log("break 시점의 a의 값 : " + a);
        break;
    }
    a++;
}