//menghitung jumlah kalimat
function hitungJumlahKata(kalimat) {
  return kalimat.split(' ').length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4.
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

//menghitung jumlah kata
function hitungJumlahKata(kata) {
  return kata.split('').length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 14.
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 32
console.log(hitungJumlahKata('A song to sing')); // 14
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 20


// yang membedakan dari dua itu adalah tanda spasi di dalam retrun menghitung kalimat menambahkan spasi di dalam return kalimat.split(' ').length;
// menghitung kata tidak perlu menambahkan spasi
