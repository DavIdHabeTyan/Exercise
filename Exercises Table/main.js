let str = '';
for (let i = 1; i <= 6; i++) {
   for (let j = 1; j <= 6; j++) {
      if (i === 1 || i === 6 || j === 1 || j === 6) {
         str += '1';
      } else {
         str += ' ';
      }
   }
   str += '\n'
}
console.log(str)