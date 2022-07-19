
describe("// 1) Make an array of numbers that are doubles of the first array" , () => {

   function sumArray(arr) {
      return arr.map(item => {
         return item * 2
      })

   }

   test("", () => {
      expect(sumArray([2, 5, 100])).toEqual([4, 10, 200])
   })


})


describe("2) Take an array of numbers and make them strings", () => {
   function convertArrayToString(arr) {
   return arr.map(item => {
      return item + ""
   })

   }

   test("", () => {
      expect(convertArrayToString([2, 5, 100])).toEqual(["2", "5", "100"])
   })
})



describe("3) Capitalize each of an array of names" , () => {
   function capitaliseName(arr) {
      return arr.map(elem  => {
         return elem.toLowerCase()
      }).map(item => {
         return item[0].toUpperCase().concat(item.slice(1))
      })
   }



   test("", () => {
      expect(capitaliseName(["john", "JACOB", "jinGleHeimer", "schmidt"])).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"])
   })
})

describe("4) Make an array of strings of the names",  () => {
  function namesOnly(arr) {
      return arr.map(item => {
         return item.name
      })

  }


test("", () => {
   expect(namesOnly([
      {
         name: "Angelina Jolie",
         age: 80
      },
      {
         name: "Eric Jones",
         age: 2
      },
      {
         name: "Paris Hilton",
         age: 5
      },
      {
         name: "Kayne West",
         age: 16
      },
      {
         name: "Bob Ziroll",
         age: 100
      }
   ])).toEqual(["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"])
})
})