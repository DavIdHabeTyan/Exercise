/*
let str = "abc";
let result = str.split("").reverse().join("");
console.log(result === str)




function checkPalindrome(string){
   const len = str.length;
   for(let i = 0; i < len / 2; i++){
      if(string[i] !== string[len - 1 - i ]){
         return "It is not a palindrome";
      }
   }
   return "It is Palindrome"
}

console.log(checkPalindrome("aaaabbbaaaa"))

 */

/// one loop Palindrome

function isPalindrome(str1) {
   let string = "";
   for(let i = str1.length - 1; i >= 0; i--){
      string +=str1[i];
   }
   return string === str1
}
console.log(isPalindrome("madam"));

