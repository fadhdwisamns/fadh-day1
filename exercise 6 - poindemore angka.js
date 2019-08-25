
function angkaPalindrome(num) {
  var angka = 0;
  for (var i = num + 2; i < num * 2 ; i++) {
    
    angka = i;
    
  }
  return angka;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 15
console.log(angkaPalindrome(10)); // 19
console.log(angkaPalindrome(117)); // 233
console.log(angkaPalindrome(175)); // 349
console.log(angkaPalindrome(1000)); // 1999

// yang benar


function angkaPalindrome(num) {
  function cekPalindrome(num) {
    var a, no, temp = 0;
    no = num;
    
     while (no > 0) {
      a = no % 10;
      no = parseInt(no / 10);
      temp = temp * 10 + a;
    }
  
    return temp === num;
  }
  
  var res = 0;
  for (var i = num + 1; i < num * 2; i++) {
    if (cekPalindrome(i)) {
      res = i;
      break;
    }
  }
  
  return res;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
