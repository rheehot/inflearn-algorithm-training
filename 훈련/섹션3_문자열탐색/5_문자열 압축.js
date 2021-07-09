function compressStr(str){
  let answer = '';
  let count = 1;
  str += ' '; // dummy 문자열 추가
  for (let i = 0; i < str.length - 1; i++){ // for문은 dummy를 뺀 str.length-1 까지만
    if (str[i] === str[i+1]){
      count++;
    }
    else {
      answer += str[i]
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}
console.log(compressStr('KKHSSSSSSSE'))