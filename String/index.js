////--------- Find toLowerCase to string

function findLowerCase(str) {
   let result = ""
   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
         result += str[i]
      }
   }
   return result
}

console.log(findLowerCase("AADJBHBbsahBHSBD"))

///--------- Find Letter in string

function findLetterInString(str, letter) {
   let count = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
         count++
      }
   }
   return count
}

console.log(findLetterInString(("big fat bubble"), ("b")))


//// ---------------------- Repeating Letters string-----

function repeatLetters(str) {
   let result = "";
   for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i]
   }
   return result;
}

console.log(repeatLetters("String"))
console.log(repeatLetters("Hello World!"))


//// --------Change first letter in text  to toUpperCase ----

function changeFirstLetter(text) {
   let names = text.split(" ");
   let result = names.map(elem => {
      return elem.substring(0, 1).toUpperCase() + elem.substring(1, elem.length).toLowerCase()
   })
   return result.join(" ")
}

console.log(changeFirstLetter("david habetyan manveli"))



// ------------ Find world in text
//  ----------   method - Search ---
function findWorld(text, world) {
   return text.search(world)
}

console.log(findWorld("This person went to the store and purchased a car", "went"))

/// change in the text world or letter to letter or text

function changeLetter(text, letter){
   return text.replaceAll("s", letter)
}

console.log(changeLetter("This person went to the store and purchased a car", "X"))