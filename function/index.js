///FUNCTION FACTORY

//this exercises  was written Decorator function

// function makePlusFunction(numb) {
//   console.log(numb + 5);
// }
// function makeDecorator(sumNumb) {
//   return function() {
//     const result = sumNumb.apply(this,arguments)
//     return result
//   }
// }
// const pluseFive = makeDecorator(makePlusFunction);
// pluseFive(2)
// pluseFive(-8)
//
// const plusTen = makePlusFunction(10)


//==========================
function makePlusFunction(numb){
  return function(elem) {
    const result = numb + elem;
    return result;
  }
}
const plusFive = makePlusFunction(5);
console.log(plusFive(2));
console.log(plusFive(-8))

const plusTen = makePlusFunction(10);
console.log(plusTen(0))
console.log(plusTen(188))
console.log(plusFive(plusTen(0)))



/// H4CK3RSP34K
// function hackerSpeak(text) {
//   return text.replaceAll('a', '4')
//     .replaceAll('e', '3')
//     .replaceAll('i', '1')
//     .replaceAll('o','0')
//     .replaceAll('s', '5')
// }
//
// console.log(hackerSpeak('javascript is cool'));
// console.log(hackerSpeak('programming is fun'));
// console.log(hackerSpeak('become a coder'))

