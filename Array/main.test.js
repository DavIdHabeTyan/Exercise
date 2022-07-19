/// -----------   ----  - 1. ---- Create a function that returns an array of strings sorted by length in ascending order.

function sortedArrLength(arr) {
   arr.sort((a, b) => a.length - b.length)
   return arr
}

console.log(sortedArrLength(['a', 'ccc', 'dddd', 'bb']));


// ------------  2 -------- . find max number and count this number

function getCountOfMaxElem(arr) {
   let countMap = {};
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];

      if (elem >= max) {
         max = elem;

         if (countMap[elem]) {
            countMap[elem]++;
         } else {
            countMap[elem] = 1;
         }
      }
   }

   return countMap[max];
}

const count = getCountOfMaxElem([5, 5, 2, 3, 5, 1, 2, 2, 2, 5]);

console.log(count);



// find number and output length;

function findNumb(arr) {
   let min = 10;
   let max = 0;
   let result = [];
   let findIndex = [];
   let index = []
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
   }
   for (let j = min; j <= max; j++) {
      result.push(j)
   }
   findIndex = [...arr, ...result];

   for (let i = 0; i < findIndex.length; i++) {
      let count = 0
      for (let j = 0; j < findIndex.length; j++) {
         if ( findIndex[j] === findIndex[i]) {
            count++
         }
      }
      if(count === 1){
         index.push(findIndex[i])
      }
   }
   return index.length

}


// console.log(findNumb([6, 2, 3, 8]))



