function peaks(arr) {
  let l = arr.length;
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if (x >= 0 && x < l &&
            y >= 0 && y < l && 
            arr[x][y] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) count++;
    }
  }
  return count;
}
const map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(peaks(map));
