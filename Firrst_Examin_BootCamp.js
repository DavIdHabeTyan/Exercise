// 1 . Use array methods to turn data into result

let data = [
   ["The", "red", "horse"],
   ["Plane", "over", "the", "ocean"],
   ["Chocolate", "ice", "cream", "is", "awesome"],
   ["this", "is", "a", "long", "sentence"]
]

function groupWords(arr) {
   return arr.reduce((accum, elem) => {
      let joinElem = elem.join(" ");
      accum.push(joinElem);
      return accum
   }, [])
}
console.log(groupWords(data))


// 2 .  Create a constructor function to produce calculator instances (+,-,*,/ operations).

function Calculate() {
   this.calc = (a, b, symbol) => {
      switch (symbol) {
         case "+": return a + b;
         break;
         case "-": return a - b;
         break;
         case "/": return a / b;
         break;
         case "*": return a * b;
         break;
         default: console.log("Error");
      }
   }
}

let calc = new Calculate();
console.log(calc.calc(4, 5, "*"))


// 3. Remove duplicates in an array.

let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDuple(arr) {
   let dublicatet = [];
   arr.forEach(elem => {
      if(dublicatet.indexOf(elem) === -1){
         dublicatet.push(elem)
      }
   })
   return dublicatet
}
console.log(removeDuple(dupes))

// 4. Group by property

let arr = [
   { name: "Alice", job: "Data Analyst", country: "AU" },
   { name: "Bob", job: "Pilot", country: "US" },
   { name: "Lewis", job: "Pilot", country: "US" },
   { name: "Karen", job: "Software Eng", country: "CA" },
   { name: "Jona", job: "Painter", country: "CA" },
   { name: "Jeremy", job: "Artist", country: "SP" }
];

function group(arr, prop){
   let obj = {};
   arr.forEach(elem => {
      if(obj[elem.country] === undefined ) {
         obj[elem.country] = [elem];
      }
      obj[elem.country].country(elem)
   })
   return obj;
}

console.log(group(arr));


// 5. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

let str = "i.like.this.program.very.much";

let reverse = str.replaceAll(".", " ").split(" ").reverse().join(".");
console.log(reverse)