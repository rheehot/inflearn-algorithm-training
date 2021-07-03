function largestSumMatrix(matrix) {
  let n = matrix.length;
  let h = v = answer = 0;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++) {
      h = v = 0;
      h += matrix[i][j];
      v += matrix[j][i];
    }
    answer = Math.max(h, v, answer);
  }
  let l = r = 0;
  for (let i = 0; i < n; i++){
    l += matrix[i][i];
    r += matrix[n-1 - i][n-1 - i];
  }
  answer = Math.max(l, r, answer);
  return answer;
}
const matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11], 
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
]
console.log(largestSumMatrix(matrix));