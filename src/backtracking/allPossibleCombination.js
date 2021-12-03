/*
This is a programming for get all possible combinations of k items in different order from n items.
That is same of total number of possible combinations in order =  'permute n k' or nPk = n!/(n-k)!

->Worst Complexity: O(nPk)

For example: 
  items:  n = [1,2,3]
  if we choose 2 items from n: 
  so, k = 2;
  possible combinations:
  [[1,2], [1,3], [2,3], [2,1], [3,1], [3,2]]
*/

class BackTarcking{
  constructor(arr, k){
    this.items = arr;
    this.allPossiblePaths = [];
    this.k = k;
    this.currPath = [];
    this.visited = {};
  }
  
  getAllPossibleCombination(){
    for(var i = 0; i<this.items.length; i++){
      this.visitItem(i);
    }
    return this.allPossiblePaths;
  }
  
  visitItem(itemInd){
    if(this.currPath.length === this.k - 1){
      this.allPossiblePaths.push([...this.currPath, this.items[itemInd]]);
      return;
    }
   // visit item
     this.currPath.push(this.items[itemInd]);
     this.visited[itemInd] = true;
    //visit children of that item
     var i = 0;
     while(i < this.items.length){
       if (!this.visited[i]){
         this.visitItem(i);
       }
       i++;
     }
    
    // visit complete
    delete this.visited[itemInd];
    this.currPath.pop();
  } 
}
//console.log(new BackTarcking([1,2,3], 3).getAllPossibleCombination());
