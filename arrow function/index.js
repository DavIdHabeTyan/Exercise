///======exercises 1
//
// console.log(this);
// const a = {
//   age: 22,
//   name: 'Joe',
//   getName: function () {
//     return this.name
//
//   },
//   getAge: () => this.age
//
// };
// console.log(a.getName()) /// 'JOe'
// console.log(a.getAge()) /// undefined //global this qani vor arrow function


///========exercises 2
///arrow function This arden voroshvac e ev inq@ global this e.

//
// const f = () => this.name;
// function people() {
//   return this.name
// }
// const a = {
//   name: 'Mike'
// };
// console.log(people.call(a)); /// kveradacrci MIke qani vor function decorator e
// console.log(f.call(a)); ///----undefined qani vor global this. arrow function


//---------exercises 3
//
// function f() {
//   // this  === a
//   return () =>  this.age; //ays depqum this@ ir cnox functioni thisn e , ir cnox@ function f
// }
// const a = {
//   age: 22
// };
// const z  = f.call(a);
// console.log(z()) // veradaccrun e 22 qani vor this-@ functioni
// mej ee ev kanchum e ayd functio this. vorin call enq anum a


///=========before code
// let a = [5, 40, 29, 44, 33];
//
// function o() {
//   let b = [];
//   a.map(function (val) {
//     b.push(val + 1);
//   });
//   let z = b.filter(function (val) {
//     return val % 2 === 0
//   })
//   return z
// }
//
// console.log(o(a))


//=============after code
// let a = [5, 40, 29, 44, 33];
//
// function transform(arr) {
//   return arr
//     .map(val => val + 1)
//     .filter(val => val % 2 === 0);
// }
//
// console.log((a));

// -----Less Than, Greater Than
//Create a function that takes two numbers num1, num2,
// and an array arr and returns an array containing all the numbers
// in arr greater than num1 and less than num2.

// function findIntervalNumb(numb1, numb2, arr) {
//   return arr.filter(number => {
//     return number > numb1 && number < numb2
//   })
//
// }
// console.log(findIntervalNumb(3, 8, [1, 5, 95, 0, 4, 7]))
// console.log(findIntervalNumb(1, 10, [1, 10, 25, 8, 11, 6]))
// console.log(findIntervalNumb(7, 32, [1, 2, 3, 78]))



function amplify(number) {
  let arr = []
  let i = 0
  while(i < number){
    i++
    arr.push(i)
  }
  return  arr.map(val => {
    if(val % 4 === 0){
      val *= 10
    }
   return val
  })
}
console.log(amplify(4))
console.log(amplify(3))
console.log(amplify(25))