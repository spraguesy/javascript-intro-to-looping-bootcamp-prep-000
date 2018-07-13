function forLoop (arr) {
  for(var i=0; i<25; i++) {
    if (i ===1) {
      arr.push("I am 1 strange loop");
    } else {
      arr.push(`I am ${i} strange loop`);
    }
    
  }
  
  return arr
}

function whileLoop (num) {
  while (num >= 0) {
    num--;
    console.log(num);
  }
  return 'done'
}