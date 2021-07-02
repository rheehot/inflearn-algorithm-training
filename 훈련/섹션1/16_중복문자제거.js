function removeRepeatedStr (str) {
  let answer = str[0];
  for (let char of str){
    if (!answer.includes(char))
      answer += char;
  }
  return answer;
}
console.log(removeRepeatedStr('ksekkset'));