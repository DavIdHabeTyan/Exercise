/// -----Spread and Rest
// --------- reduce -------
function merge(...args ){
   return args.reduce((acm, elem) =>{
      return {...acm, ...elem}
   }, {});
}
console.log(merge({
      name: "David",
      userName: "Habetyan"
   },
   {
      age: 23,
      phone: 45794544,
   },
   {
      address: "Yerevan",
      work: "Developer"
   }))