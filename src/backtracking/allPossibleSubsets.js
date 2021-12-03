/*
 This programming determine all possible sets of n items
 example:
    items: n = [1,2,3,4]
    possible sets: [[], [4], [3], [4, 3], [2], [4, 2], [3, 2], [4, 3, 2], [1], [4, 1], [3, 1], [4, 3, 1], [2, 1], [4, 2, 1], [3, 2, 1], [4, 3, 2, 1]]
*/

function getAllPossibleSubsets(arr){
  var allSubsets = [];
  for(var i = 0; i< Math.pow(2, arr.length); i++){
    // binary value of i
    var temp = i, count = 0, subsets = [];
    while(temp > 0){
      count++;
      var rem = temp % 2;
      if (rem === 1) {
       subsets.push(arr[arr.length - count]); 
      }
      temp = Math.floor(temp / 2);
    }
     allSubsets.push(subsets);
  }
  return allSubsets;
}
// console.log(getAllPossibleSubsets([1,2,3, 4]));
