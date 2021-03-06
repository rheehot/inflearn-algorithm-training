//7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

function minSumOdd(arr) {
  let sum = 0;
  let min = 100;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1){
      sum += arr[i];
      if (arr[i] < min)
        min = arr[i];
    }
  }
  return [sum, min];
}

console.log(minSumOdd([12, 77, 38, 41, 53, 92, 85]))