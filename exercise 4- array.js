var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;

function dataHandling2(input) {
  
return input;
}
var spliceinput = input.splice(1,1, 'Roman Alamsyah Elsharawy');
var spliceinput2 = input.splice(2,1, 'Provinsi Bandar Lampung');

var getinput4 = input[3];
var spliceinput4 = input.splice(4,1, 'Pria');
var spliceinput5 = input.splice(5,1, ' SMA International Metro');

console.log (input)



var str = input.toString();

var input1 = str.split('/');

switch (input1[1]){
  
  case '01': console.log('Jan');
  break;
  case '02': console.log('Feb');
  break;
  case '03': console.log('Mar');
  break;
  case '04': console.log('Apr');
  break;
  case '05': console.log('Mei');
  break;
  default: console.log('coba lagi');
  
}



var input2 = input[3].split('/').sort();

console.log(input2)

var input3 = input[3].split('/').join('-');

input2.sort(function(a,b)
{ return b - a});

console.log (input2);


console.log (input3);


console.log (input[1].split('',15).join(''));
