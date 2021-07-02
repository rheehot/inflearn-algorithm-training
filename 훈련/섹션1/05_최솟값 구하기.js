function smallest(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min)
      min = arr[i];
  }
  return min;
}

console.log(smallest([5, 3, 7, 11, 2, 15, 17]))
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(Number.MAX_VALUE)