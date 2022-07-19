//// ----- flated array

let arr = [[1, 2], [3, 4], [5, 6], [7, 7, 9], [10, 11, 12, 13, 14, 15]];

let flatArray = [].concat(...arr)

console.log(flatArray)

//
// let flatArray1 = arr.reduce((acc, val) => {
//    return acc.concat(val)
// }, [])
//
// console.log(flatArray1)

// -- ------ flaten array
function flatten(arr) {
   let result = arr.reduce((aggr, val) => {
      // if(Array.isArray(val)){
      return aggr.concat(val)

   }, [])
   return result
}
let arrays = [["1", "2", "3"], [true], [4, 5, 6]];
console.log(flatten(arrays))




