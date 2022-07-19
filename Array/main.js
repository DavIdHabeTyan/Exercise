//find copy value in Array
function findValue(arr) {
   let result = [];

   for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
         if (arr[i] === arr[j]) count++;
      }
      if (count === 1) {
         result.push(arr[i])
      }

   }
   return result
}

// console.log(findValue(["a", "b", "a", "c", "d", "w"]))

//4.  From Pairs. Write a method that returns an object composed of key-value pairs.

function changArrToObj(arr) {
   let object = {}
   for (let i = 0; i < arr.length; i++) {
      object[arr[i][0]] = arr[i][1];
   }
   return object
}

// console.log(changArrToObj([["a", 1], ["b", 2]]))


// 7. IsEqual. Write a function that compares two arrays and returns true if they are identical.

function isEqual(arr, arr2) {
   if (arr.length !== arr2.length) return false;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr2[i]) return false;
   }
   return true
}

// console.log(isEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])) // ete poxum enq hertakanutyun@ chi ashxatum.


// 8. Flatten. Write function that turns a deep array into a plain array. Please, do not use array.flat(); to make this task more enjoyable.


// function clearArr(arr) {
//    let newArr = []
//    for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//          clearArr(arr[i]);
//       } else {
//          newArr[newArr.length] = arr[i]
//       }
//    }
//    return newArr
// }
//
// newArr = clearArr([1, 2, [3, 4, [5, 6, 7]]])
// console.log(newArr)


// ------ Find the Smallest and Biggest Numbers

function findMinMaxElement(arr) {
   let maxEl = 0;
   let minEl = 10;
   let minMaxArr = []
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minEl) minEl = arr[i]

   }

   return minEl
}

// console.log(findMinMaxElement([24, 14, 3, 4, 5]))

function capitaliseName(arr) {
   return arr.map(elem  => {
      return elem.toLowerCase()
   }).map(item => {
      return item[0].toUpperCase().concat(item.slice(1))
   })
}

console.log(capitaliseName(["john", "JACOB", "jinGleHeimer", "schmidt"]))