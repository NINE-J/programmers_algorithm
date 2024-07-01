/*
문제 설명
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ n ≤ 10,000
입출력 예
n	result
12	[2, 3]
17	[17]
420	[2, 3, 5, 7]
입출력 예 설명
입출력 예 #1

12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
입출력 예 #2

17은 소수입니다. 따라서 [17]을 return 해야 합니다.
입출력 예 #3

420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.
*/
function solution(n) {
  let factors = []
  
  for(let i = 2; i <= n; i++) {
      if(n % i === 0) factors.push(i)
  }
  
  return factors.filter(el=>isPrime(el))
}

function isPrime(num) {
  let cur = 2
  
  while(cur < num) {
      if(num%cur===0) return false
      cur++
  }
  
  return true
}

//정답 후 다른 사람의 풀이
//n을 편집하면서 소수 판별도 같이하면 소인수분해를 간략히 할 수 있다.
function solution(n) {
  var answer = [];

  for(let i = 2; i <= n; i++) {

      while (n % i === 0) {

          n = n / i;
          answer.push(i);

      }
  }

  return [...new Set(answer)];
}