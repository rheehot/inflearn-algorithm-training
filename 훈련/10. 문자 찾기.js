function findChar(str, char) {
  let count = 0;
  for (let el of str) {
    if (el === char)
      count++;
  }
  return count;
}

console.log(findChar('COMPUTERPROGRAMMING', 'R'));
