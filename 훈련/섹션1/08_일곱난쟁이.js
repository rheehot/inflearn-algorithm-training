function sevenDwarfs(arr) {
  // for (let i = 0; i < arr.length; i++){
  //   for (let j = i + 1; j < arr.length; j++){
  //     let arr1 = arr.filter(el => {
  //       if (el !== arr[i] && el !== arr[j])
  //         return el;
  //     })
  //     let sum = arr1.reduce((acc, cur) => {
  //       return acc + cur;
  //     }, 0)
  //     if (sum === 100)
  //       return arr1;
  //   }
  // }
  let sum = arr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < 8; i++){
    for (let j = i + 1; j < 9; j++){
      if (sum - (arr[i] + arr[j]) === 100){
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

console.log(sevenDwarfs([20, 7, 23, 19, 10, 15, 25, 8, 13]))