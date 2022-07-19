let arr = [
   { name: "Alice", job: "Data Analyst", country: "AU" },
   { name: "Bob", job: "Pilot", country: "US" },
   { name: "Lewis", job: "Pilot", country: "US" },
   { name: "Karen", job: "Software Eng", country: "CA" },
   { name: "Jona", job: "Painter", country: "CA" },
   { name: "Jeremy", job: "Artist", country: "SP" }
];


// function group(arr){
//    let obj = {};
//    arr.forEach(elem => {
//       if(!obj[elem.country]) {
//          obj[elem.country] = [elem];
//       }
//       obj[elem.country].push(elem)
//    })
//    return obj;
// }
// console.log(group(arr));


function group(arr){
   return arr.reduce((accum, elem) => {
      if(!accum[elem.country]){
         accum[elem.country] = [elem]
      }
      accum[elem.country].push(elem)
      return accum
   }, {})

}
console.log(group(arr));



// let array = [{ key: '3a' }, { key: 444 }, { key: 3 }, { key: 19 }, { key: '3ss' }, { key: '4' }, { key: 's3' }, { key: 191 }, { key: '3' }, { key: 43 }, { key: 33 }];
//
// const places = ['fisrt', 'second', 'third','forth'];
//
// function change(arr, places) {
//    return arr.filter(item => typeof item.key === 'number')
//       .reduce((curr, element, index) => {
//          curr.push({[element.key]: places[index%4]});
//          return curr;
//       },[])
// }
//
// let changed = change(array, places);
// console.log(changed)

