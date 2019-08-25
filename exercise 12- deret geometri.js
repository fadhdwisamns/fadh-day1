function tentukanDeretGeometri(arr) {
  var minus=[];
  var salah=0;
  if(arr[0]<arr[1]){
    for(var a=0;a<(arr.length -1);a++){
      minus +=arr[a+1]/arr[a];
      if(minus.length>1&&minus[a]===minus[a-1]){
        salah +=1;
      }
    }
    return salah===(minus.length-1);
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
