/*
This is programming for get all possible combinations of k items in distinct order from n items
This is same as total possible combinations =  nPk = n!/(n - k)!
Complexity: O(nPk)
example: n = [1,2,3]
possible combinations in distinct order of k = 2 items from this n items are: ["12", "13", "21", "23", "31", "32"]
*/
function backTracking(arr, currPath, allSubsets, k){
  var i = 0;
  while(i<arr.length && currPath.length < k){
    // check unvisited nodes
    if (!currPath.includes(arr[i])) {
      backTracking(arr,currPath + arr[i], allSubsets, k); 
    }
    i++;
  }
  if(currPath.length === k){
    allSubsets.push(currPath);
  }
  return allSubsets;
}
// console.log(backTracking([1,2,3],'', [], 2));
