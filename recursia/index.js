
// /exercise--- sum Array.isArray ---- reduce
/*
function sumArr(arr) {
  return arr.reduce(function(aggr, vall) {
    if(Array.isArray(vall)){
      return aggr + vall.reduce(function(aggr, vall) {
      return aggr + vall
      },0);
    }
    return aggr + vall
  },0)

}
console.log(sumArr([4, 3,[8, 2] ]));
// console.log(sumArr([4,3,[8,2], [3, 6, [9, 12, 33], 6], 7, 8, 9]));

*/


// =------------ test -------------
/*

function nestidArrayConvert(arr) {
   let result = []
   return arr.forEach(elem => {
      if (Array.isArray(elem)) {
         result.push(elem)
      }
      return result
   })
return result
}


console.log(nestidArrayConvert([4, 3,[8, 2]]))


*/



//exercise sum Array.isArray ---Recursia

/*
function sumArray(arr) {
  return arr.reduce(function(aggr, val) {
    if(Array.isArray(val)) {
      return aggr + sumArray(val)
    }
    return aggr + val
  }, 0)
}

console.log(sumArray([4, 5, 3]))
console.log(sumArray([4,3,[8,2], [3, 6, [9, 12, 33], 6], 7, 8, 9]));

*/



// exercises Recusria Math.pow

/*
function mathPow(numb, math) {
if(math === 0) {
  return 1
}
  return numb * mathPow(numb, math - 1);
}
console.log(mathPow(5, `3))

 */


//exercises forEach recursia

/*
function foreach1(arr, func) {
  for(let i = 0; i < arr.length; i++){
    func(arr[i], i)
  }
}
foreach([3, 4, 5], function(val, i) {
  console.log(val +' at index ' +  i)
})

 */



// -------- sum arrayFlat recursia
/*
function sum (arr) {
   return arr.reduce((aggr, val) => {
      if(Array.isArray(val)) {
         return aggr + sum(val)
      }
      return aggr + val
   }, 0)
}

console.log(sum([1, 2,[3,[4,[5]]]]))


 */


