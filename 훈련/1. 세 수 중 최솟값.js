// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)


function minOfThree(a, b, c) {
  let min;
  if (a < b)
    min = a;
  else
    min = b;
  if (c < min)
    return c;
  else
    return min;
}

console.log(minOfThree(1231,4,34));