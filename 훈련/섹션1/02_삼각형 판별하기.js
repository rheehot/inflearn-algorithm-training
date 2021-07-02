//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

function isTriangle(a, b, c) {
  if (a > b + c || b > a + c || c > a + b)
    return "NO";
  return "YES";

  // sol2
  let max = Math.max(a, b, c)
  let total = a + b + c;
  if (total - max <= max) return false;
  return true;
}

console.log(isTriangle(6, 7, 11))
console.log(isTriangle(13, 33, 17))