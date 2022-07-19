let str = "i.like.this.program.very.much";
let revers = str.replaceAll(".", " ").split(" ").reverse().join(".")
console.log(revers)