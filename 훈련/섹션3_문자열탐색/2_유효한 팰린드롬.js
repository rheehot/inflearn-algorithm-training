function isValidPalindrome(str) {
  str = str.toLowerCase();
  // let l = str.length;
  // let half = Math.floor(l / 2);
  // for (let i = 0; i < half; i++){
  //   if (!str[i].match(/[a-z]/))
  //     continue;
  //   if (str[i] !== str[l-1 - i])
  //     return false;
  // }
  // return true;
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') !== str)
    return false;
  return true;
}

console.log(isValidPalindrome('found7, time: study; Yduts; emit, 7Dnuof'))