onsole.log('Looping Pertama')

for(var angka = 1; angka < 20; angka++) {
  console.log(angka + ' - I love coding');
}

console.log('Looping Kedua')

for(var angka = 20; angka > 0 ; angka--) {
  console.log(angka + ' - I will become fullstack developer');
}var num = 1;

for(i = num; i <= 100; i++){
  if((i % 2) === 0){
    console.log('Genap');
  }else{
    console.log('Ganjil');
  }
}


// Untuk pertambahan counter 2

for(i = 1; i <= 100; i+=2){
  var counter = i;
  if((counter % 3)=== 0){
    console.log(i + ' KELIPATAN ' + i);
  }
 
}

// Untuk pertambahan counter 5

for(i = 1; i <= 100; i+=5){
  var counter = i;
  if((counter % 6)=== 0){
    console.log(i + ' KELIPATAN ' + i);
  }
}

// Untuk pertambahan counter 9

for(i = 1; i <=100; i+=9){
  var counter = i;
  if((counter % 10)=== 0){
    console.log(i + ' KELIPATAN ' + i);
  }
}