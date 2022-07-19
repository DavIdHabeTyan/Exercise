function marge(...obj){
   return obj.reduce((aggr, elem) => {
      return {...aggr, ...elem}
   },{})

}

console.log(marge({
      name: "Dav",
      age: 25,
      phone: 4544124,
   },
   {
      name: "Gar",
      age: 24,
      phone: 421256784,

   },
   {
      name: "Levon",
      age: 26,
      phone: 6577512,
   }))



let obj = {
   green: [{ name: 'Sargis' }, { name: 'Ani'}, { name: 'Zaven' }],
   red: [{ name: 'Hayk' }, { name: 'Anna'}, { name: 'Suren' }],
   yellow: [{ name: 'Vahe' }, { name: 'Arman'}, { name: 'Narek' }],
};

let result = Object.keys(obj).reduce((current, item,) => { // 'green' // 'red' // 'yellow'
   let row = obj[item].map(element => {
      element.team = item;
      return element;
   });
   // console.log(row,  [...current, ...row]);
   return [...current, ...row];
   return result;

}, []);

console.log(result)
