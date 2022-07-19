let array = [12, 34, 5, 6, 78, 89, 3];

function binarySearch(arr, numb) {
   let sortArr = arr.sort((a, b) => a - b);
   let left = 0;
   let right = sortArr.length - 1;
   let mid;
   while (left <= right) {
      mid = Math.round((right - left) / 2) + left;

      if (numb === sortArr[mid]) {
         return `finded index ${mid} `;
      } else if (numb < sortArr[mid]) {
         right = mid - 1;
      } else {
         left = mid + 1;
      }

   }
   return false;
}

console.log(binarySearch(array, 6));