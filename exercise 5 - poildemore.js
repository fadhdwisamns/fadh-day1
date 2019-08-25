function palindrome(kata) {
  var pesan = ''; //teks kosong untuk membalikan kata
  for (var fadh = kata.length-1; fadh >= 0; fadh--) {
    pesan = pesan + kata[fadh];
    //kata[fadh] nilai fadh yang di arraykan atau di kembalikan 
    // kata.length panjang nilai kata
    //  jika ingin membalikan kata function kata di berikan panjang nilainya di kurang 1 dan variabel fadh di inkrementkan
  }
  
  return pesan === kata ? true : false; // nilai yang di kembalikan true atau false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
