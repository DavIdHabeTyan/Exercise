function reduce(arr, fun, aggr) {
   arr.forEach((val, i )=> {
      if( i === 0 && aggr === undefined){
         aggr = val
      }else {
         aggr = fun(aggr, val)
      }
   })
   return aggr
}
let result = reduce([1, 2, 55, 4, 5], function(aggr, val) {
   return Math.max(aggr, val)
})
console.log(result)
