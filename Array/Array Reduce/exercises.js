const obj1 = {
   name: "David",
   age: 23,
   phone: 4574554
}

const obj2 = {
   name: "Vardan",
   age: 45,
   phone: 4587124,
}

const obj3 = {
   name: "Gugu",
   age: 84,
   phone: 1547512
}

function findAllAge(...obj){
   let output = []
  for(let key of obj){
     arr.push(key.age)
  }
  return arr
}

console.log(margeObject(obj1, obj2, obj3))

function margeObject(...args){
   let marge = [];
   return (marge = Object.assign(marge, ...args ))
}

console.log(margeObject({ name: "Dav", age: 25 }, { name: "hay", phone: 4545 }))