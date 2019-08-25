
function tentukanDeretAritmatika(arr) {
  var selisih=[];
  var benar=0;
  if(arr[0]<arr[1]){
    for(var a=0;a<(arr.length -1);a++){
      selisih +=arr[a+1]/arr[a];
      if(selisih.length>1&&selisih[a]===selisih[a-1]){
        benar +=1;
      }
    }
    return benar===(selisih.length-1);
  }
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
