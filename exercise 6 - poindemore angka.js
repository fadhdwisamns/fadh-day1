
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
