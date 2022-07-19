//1.   Create a function that builds a tree.
const treeNodes = [
   {id: 'root', children: [1, 2]},
   {id: 1, children: [3]},
   {id: 2, children: [4, 5]},
   {id: 3, children: [6]},
   {id: 4, children: [7]},
   {id: 5, children: []},
   {id: 6, children: []},
   {id: 7, children: [8, 9]},
   {id: 8, children: []},
   {id: 9, children: [10]},
   {id: 10, children: []},
]
makeTreeFromNodes = (arr, id = "root") => {
   return arr.reduce((prev, cur) => {
      if (cur.id === id) {
         for (let i = 0; i < cur.children.length; i +=1) {
            prev[cur.children[i]] = makeTreeFromNodes(arr, cur.children[i]);
         }
      }
      return prev;
   }, {})
}

console.log(makeTreeFromNodes(treeNodes))




//2.   Write a JavaScript function to get all possible subsets of given length of the given array.
// Assume that all elements in the array are unique.
/*
function f(arr = [], k = 0, ind = 0) {
   if (k === 0) return [[]];
   const res = [];
   for (let i = ind; i <= arr.length - k; i++) {
      const r = f(arr, k - 1, i + 1);
      r.forEach(a => {
         res.push([arr[i], ...a])
      });
   }
   return res;
}

console.log(f([1, 2, 3, 4, 5], 3))

//----------------------  ---------------------

function getAllSubsets(array, n) {
   const subsets = [[]];
   for (const el of array) {
      const last = subsets.length - 1;
      for (let i = 0; i <= last; i++) {
         subsets.push([...subsets[i], el]);
      }
   }
   const filtered = subsets.filter(ar => ar.length === n)
   return filtered;
}

console.log(getAllSubsets([1, 2, 3, 4, 5], 3))

//----------------------  ---------------------

function findSubarraysOfArray(arr, currLength, resultArray = [], i = arr.length - 1) {
   for (i; i >= 0; i--) {
      let curr = [...arr];
      curr.splice(i, 1);
      if (curr.length !== currLength) {
         findSubarraysOfArray(curr, currLength, resultArray, i - 1);
      } else {
         resultArray.push(curr);
      }
   }
   return resultArray;
}

console.log(findSubarraysOfArray([1, 2, 3, 4, 5], 3))


 */