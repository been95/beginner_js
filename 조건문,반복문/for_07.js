for(let i=0; i<5; i++){
    let triangle = "";
    for(let j=0; j<5; j++){
      if(j<5-i){
        triangle = triangle+"*";
      }
      else{
        triangle = triangle+" ";
      }
    }
    for(let j=0; j<5; j++){
      if(j>=i){
        triangle = triangle+"*";
      }
      else{
        triangle = triangle+" ";
      }
    }
    console.log(triangle);
  }