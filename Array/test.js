

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