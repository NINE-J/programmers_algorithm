/*
문제 설명
정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 1,000
1 ≤ arr의 원소 ≤ 1,000
입출력 예
arr	result
[1, 2, 3, 4, 5, 6]	[1, 2, 3, 4, 5, 6, 0, 0]
[58, 172, 746, 89]	[58, 172, 746, 89]
입출력 예 설명
입출력 예 #1

예제 1번의 arr의 길이는 6입니다. arr의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.
입출력 예 #2

예제 2번의 arr의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.
*/
function solution(arr) {
  //arr의 길이가 2의 거듭제곱이 될 때까지 arr에 0을 추가하여 리턴
  let answer = arr

  while(!isPowerOfTwo(arr.length)) {
      arr.push(0)
  }

  return answer
}

function isPowerOfTwo(n) {
  //비트연산으로 2의 거듭제곱인지 판별 true/false 리턴
  //만약 n이 2의 거듭제곱이라면 n-1은 n의 반전된 비트를 갖게 된다.
  //n이 4일 때, '100' 이라면, n - 1 = 3 = '011'
  //AND 연산자로 n과 n-1를 비교하여 0 또는 다른 숫자를 얻을 수 있다.
  //JS에서 0을 false로 사용할 수 있는 점을 이용하면...
  return !(n&(n-1))
}

//정답 후 다른 사람의 풀이
//log2(x) 값을 구하고 반올림해서 얻은 정수로 2의 거듭제곱을 구한다.
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}