function rockScissorPaper(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    let a1 = a[i],
      b1 = b[i];
    if (a1 === b1) answer.push("D");
    else if (
      (a1 === 1 && b1 === 2) ||
      (a1 === 2 && b1 === 3) ||
      (a1 === 3 && b1 === 1)
    )
      answer.push("B");
    else answer.push("A");
  }
  return answer;
}
let a = [2,3,3,1,3];
let b = [1,1,2,2,3];
console.log(rockScissorPaper(a, b))
