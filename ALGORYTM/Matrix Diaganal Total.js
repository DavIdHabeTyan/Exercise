function matrix(N){
   let arr = [];
   let leftDiagnal = [];
   let rigthDiaganal = [];
   let value = 1
   //matrix
   for (let i = 0; i < N; i++) {
      let leftDiagnal = [];
      for (let j = 0; j < N; j++) {
         leftDiagnal.push(value);
         value++
      }
      arr.push(leftDiagnal);
   }
   /// left diaganal
   for (let i = 0; i < N; i++) {
      for (let j = i; j === i; j++) {
         leftDiagnal.push(arr[i][j])
      }
   }
   //rigth diaganal
   for (let i = 0; i < N; i++) {
      for (let j = arr.length - 1 - i; j === arr.length - 1 - i;  j--) {
         rigthDiaganal.push(arr[i][j]);
      }
   }
   return [leftDiagnal]
}
console.log(matrix(3))