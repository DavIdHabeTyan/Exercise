
const people = {
   name: 'Joe',
   lastName: 'Smith',
   age: 42,
}

function printInfo({name, lastName, age}) {

   console.log(name + " " + lastName + " is " + age + " years old")
}

printInfo(people)



function checkNumberIsPalindrome(numb) {
      let number = numb;
      let reversNUmb = 0;
      while (number > 0) {
         reversNUmb *= 10;
         reversNUmb += number % 10;
         number -= number % 10;
         number /= 10;
      }
      return reversNUmb === numb
   }

console.log(checkNumberIsPalindrome(105))



function palindrome(numb) {
      let number = numb;
      let lastNumber;
      let result = [];
      while (number > 0) {
         lastNumber = number % 10;
         if(lastNumber % 2 === 0) {
            result.push(lastNumber)
         }
         number = (number - lastNumber) / 10
      }
      return result.reverse()
   }

console.log(palindrome(123456789))