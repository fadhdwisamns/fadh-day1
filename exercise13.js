function xo(str) {

var X=0;
  var O=0;
  for (var x = 0; x <str.length; x++){
    if(str[x] === 'x'){
      X ++;
    } else if (str[x] === 'o'){
      O ++;
    }
  }
  if (X === O){
    return true;
    } else {
      return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true