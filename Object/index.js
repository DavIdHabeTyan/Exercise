const drinks = [
  {
    name: 'lemonade',
    price: 50,
  },
  {
    name: 'lime',
    price: 10,
  }
];
const result = drinks.sort((a, b) => {
  return  a.price - b.price
})


console.log(result)


// --------- exercise -------- Meschyan ------------ filter//reduce
function getAvgAgeByColor(arr, color) {
  const people= arr.filter(function(val) {
    return val.hairColor === color
  })
  const sumAge = people.reduce(function(aggr, val) {
    return aggr + val.age
  }, 0)
  return sumAge/ people.length
}

console.log(getAvgAgeByColor([
  {name: "Joe", age: 13, hairColor: "red"},
  {name: "Mike", age: 10, hairColor: "brown"},
  {name: "Jane", age: 4, hairColor: "red"},
  {name: "Susan", age: 30, hairColor: "brown"}
],"brown"))

// ---------------- find numberSum
/*
let number = 458;
let result = 0
while(number > 0) {
  let sum = number % 10;
  number = (number - sum) / 10;
  result += sum
}

console.log(result)

 */

//----------- filter // map -----------
//--------- Meschyan  ------------

function transform(arr) {
  return arr.filter(function(val) {
    return val.gender === "female"
  }).map(function(val) {
    return {
     firstName: val.fn,
      lastName: val.ln,
      phone: val.ph,
      gender: val.gender
    }
  })
}

console.log(transform(  [
  {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
  {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
  {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
  {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
]))

//// -------- object -- foreach --- reverse Object Keys -------------


function magic(arr) {
const keys = Object.keys(arr);
let newObj = {};
keys.forEach(function(key) {
  const value = arr[key];
  newObj[value] = key;
})
return newObj
}

//  ------------- object ---reduce
// --------------- reverse object

///----------------- Object keys reverse ------------------
function revers(obj) {
return Object.keys(obj).reduce(function(aggr, key) {
  aggr[obj[key]] = key;
return aggr
},{})
}
console.log(revers(
  {name: 'Joe',
lastName: 'Doe'}))


function zipArr(arr1, arr2 ) {
  return arr1.reduce(function(aggr, val,indx) {
  aggr[val] = arr2[indx] ?? null
    return aggr
  }, {})
}
console.log(zipArr(["a", "b", "c"], [1, 2]))



///---------  ObjectZip  --------  reduce;

function zipObject(keys, values) {
  return keys.reduce(function(aggr, vall, indx) {
    aggr[vall] = values[indx] ?? null
    return aggr
  }, {})
}
console.log(zipObject(["a", "b", "c"], [1, 2]))


/////------------- object group zip  ----------
function groupBy(arr, low) {
  return arr.reduce(function(aggr, vall ) {
    if(!aggr[low(vall)]) {
      aggr[low(vall)] = [vall]
    } else {
      aggr[low(vall)].push(vall)
    }
    return aggr
  },{})
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
const a = 1;
const b = 2;
const objectNew = {a, b}
console.log(objectNew)

//
function helpHimRemind(person) {
  const obj= {
    "Dart Vaader": "father",
    "Lea": "sister",
    'Han': 'brother in law',
    "R2D2": 'droid'
  }
  if(Object.keys(obj) === person){
    return person + 'I am your'
  }

}

console.log(helpHimRemind("Dart Vader"))

//--------------- homework --- David --lesson 03

function filterReadStatus(arr) {
  const filter =  arr.filter(function(val) {
    return val.readStatus === true
  }).sort((a,b) => b.percent - a.percent);
  return filter
}
console.log(filterReadStatus([
     { book: "Catcher in the Rye", readStatus: true, percent: 40},
     { book: "Animal Farm", readStatus: true, percent: 20},
     { book: "Solaris", readStatus: false, percent: 90 },
     { book: "The Fall", readStatus: true, percent: 50 },
     { book: "White Nights", readStatus: false, percent: 60 } ,
     { book: "After Dark", readStatus: true, percent: 70 }
   ]
))


/// marge  Many Object

function marge(...obj){
  return obj.reduce((aggr, elem) => {
    return {...aggr, ...elem}
  },{})

}

console.log(marge({
  name: "Dav",
  age: 25,
  phone: 4544124,
},
   {
     name: "Gar",
     age: 24,
     phone: 421256784,

   },
   {
     name: "Levon",
     age: 26,
     phone: 6577512,
   }))



/// creat new object is two Array

let array = [{key: 2}, {key: 3}, {key: 5}, {key: "54"}, {key: "44"}, {key: 8}, {key: "33"}, {key: 11}, {key: 15}, {key: 26}];
const places = ["first", "second", "third", "forth"];

function change (arr, values) {
  return arr.filter(item => typeof item.key === "number")
     .reduce((acc, elemnt, index) => {
        acc.push({[elemnt.key]: values[index % values.length]})
       return acc

     }, [])
}
let changed = change(array, places)
console.log(changed)