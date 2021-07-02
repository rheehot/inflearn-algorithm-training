function middleChar (str) {
  let answer = '';
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1)
    answer += str[mid];
  else {
    answer += str[mid - 1];
    answer += str[mid];
  }
  return answer;
}

console.log(middleChar('good'))