/*
This Programming for get all possible subsets of k length from n elements
this is same of n choose k = nCk (n Combination of k)
Worst Complexity:  O((logn)*2^n)
example:
  items: n = [1,2,3]
  if k = 2;
all possible subsets of 2 lengths are = [[1,2], [1,3], [2,3]]
*/

function getAllPossibleSubsets(arr, k){
  var allSubsets = [];
  for(var i = Math.pow(2, k) - 1; i< Math.pow(2, arr.length); i++){
    // binary value of i
    var temp = i, count = 0, totalSetBits = 0; subsets = [];
    while(temp > 0){
      count++;
      var rem = temp % 2;
      if (rem === 1) {
        totalSetBits++;
       subsets.push(arr[arr.length - count]); 
      }
      temp = Math.floor(temp / 2);
    }
    if (totalSetBits === k) {
     allSubsets.push(subsets); 
    }
  }
  return allSubsets;
}
// console.log(getAllPossibleSubsets([1,2,3], 2));
