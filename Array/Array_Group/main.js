let products = [
   { name: "Alice", job: "Data Analyst", country: "AU" },
   { name: "Bob", job: "Pilot", country: "US" },
   { name: "Lewis", job: "Pilot", country: "US" },
   { name: "Karen", job: "Software Eng", country: "CA" },
   { name: "Jona", job: "Painter", country: "CA" },
   { name: "Jeremy", job: "Artist", country: "SP" }
];

function group(arr, prop) {
   return arr.reduce((accum, item) => {
      (accum[item[prop]] = accum[item[prop]] || []).push(item)
      return accum
   },{})
}

console.log(group(products, "country"));