/*
example:
n weights = [10,25,21,19, 25, 50, 14, 6, 5];
get possible subsets of weights which will give a total weight of k value, here. k = 50
outputs: ["_10_21_19", "_10_21_14_5", "_25_19_6", "_25_25", "_25_14_6_5", "_19_25_6", "_25_14_6_5", "_50"]
*/


function backTracking(arr, currIndex, currPath, allSubsets, totalW, currW){
  if (currW === totalW){
    allSubsets.push(currPath);
  }
  if (currW >= totalW || currIndex === arr.length){
    return;
  }
  backTracking(arr, currIndex + 1, currPath +'_'+ arr[currIndex], allSubsets, totalW, currW + arr[currIndex]);
  backTracking(arr, currIndex + 1, currPath, allSubsets, totalW, currW);
  return allSubsets;
}
// console.log(backTracking([10,25,21,19, 25, 50, 14, 6, 5],0, '', [], 50, 0));
