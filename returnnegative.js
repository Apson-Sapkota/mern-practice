function makeNegative(num) {
    if (Object.is(num,-0) || num===0){
      return num
  } else if (num>0){
    return -num
  } else if (num<0){
    return num
  }}
returnNegative(5);
returnNegative(0);
returnNegative(-0);