function AtoHash(str) {
  let answer = '';
  for (let char of str) {
    if (char === 'A')
      answer += '#';
    else
      answer += char;
  }
  return answer;
}

console.log(AtoHash('BANANA'))