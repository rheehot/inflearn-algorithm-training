function longest(arr) {
  let longest = "";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}
console.log(longest(["teacher", "time", "student", "beautiful", "good"]));
