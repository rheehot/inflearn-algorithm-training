/**앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문문자열(palindrome)이라고 한다
 * 
 */

function isPalindrome(str) {
  str = str.toLowerCase();
  let l = str.length;
  for (let i = 0; i < Math.floor(l / 2); i++){
    if (str[i] !== str[l-i - 1]) return false;
  }
  return true;
}

console.log(isPalindrome('gooG'));