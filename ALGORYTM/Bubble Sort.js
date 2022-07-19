


function bubleSort(numb) {
    for (let i = 0; i < numb.length; i++) {
        for (let j = 0; j < numb.length; j++) {
            if (numb[j] > numb[j + 1]) {
                [numb[j], numb[j + 1]] =  [numb[j + 1], numb [j]];
            }
        }
    }
    return numb
}

console.log(bubleSort([45, 1, 23, 5, 6, 7, 8, 2, 54, 2345, 76, 27]))