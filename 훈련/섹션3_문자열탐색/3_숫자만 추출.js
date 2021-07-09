function numbersOnly(str) {
  str = str.replace(/[^0-9]/g, '');
  //let answer = Number(str);
  let answer = parseInt(str);
  return answer;
}

console.log(numbersOnly('g0en2T0s8eSoft'));