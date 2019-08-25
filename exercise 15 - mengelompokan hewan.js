
function groupAnimals(animals) {
  var pengurutan = [ [] ];
  var a = 0;
  pengurutan[0].push(animals[0]);
  for(var i = 1 ; i < animals.length ; i++){
    animals[i][0] === pengurutan[a][0][0]
    a++
    pengurutan[a] = [animals[i]]
  }
  return pengurutan
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
