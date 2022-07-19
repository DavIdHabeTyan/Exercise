// ------ how is work reduce;

//--------  experience one


function reduce(arr, fun, aggr) {
   arr.forEach(val => {
      aggr = fun(aggr, val)
   });
   return aggr;
}
const result = reduce([5, 9, 10], function (val, aggr) {
   return val + aggr;
}, 0);
console.log(result);


/// --------- experience two

function reduce1(arr, fun, aggr) {
   for (let key of arr) {
      aggr = fun(aggr, key)
   }
   return aggr;
}
const result2 = reduce1([5, 9, 10], (val, aggr) => {
   return val + aggr
}, 0);
console.log(result2);