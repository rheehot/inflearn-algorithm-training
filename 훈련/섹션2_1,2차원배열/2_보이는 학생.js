function visibleStudents(arr) {
  let count = 1;
  let tallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tallest){
      tallest = arr[i]
      count++;
    }
  }
  return count;
}

console.log(visibleStudents([130, 135, 148, 140, 145, 150, 150, 153]));