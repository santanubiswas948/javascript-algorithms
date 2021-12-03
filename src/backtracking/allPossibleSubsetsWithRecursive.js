/*
This is a programme for get all possible subsets from n items.
This problem solved using recursive way.
Complexity: O(2^n)
example:
items: n = [1,2,3]
possible subsets: ["", "3", "2", "23", "1", "13", "12", "123"]
*/

function backTracking(arr, curInd, currPath, allSubsets){
  if (curInd === arr.length){
    allSubsets.push(currPath);
    return;
  }
  backTracking(arr, curInd + 1, currPath, allSubsets);
  backTracking(arr, curInd + 1, currPath + arr[curInd], allSubsets);
  return allSubsets;
}
// console.log(backTracking([1,2,3], 0, '', []));
