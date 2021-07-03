function calculateScore (arr) {
  let score = 0, count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      score += count;
    }
    else count = 0;
  }
  return score;
}
console.log(calculateScore([1,0,1,1,1,0,0,1,1,0]))