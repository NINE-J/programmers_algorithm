/*
문제 설명
소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
a, b는 정수
0 < a ≤ 1,000
0 < b ≤ 1,000

입출력 예
a	b	result
7	20	1
11	22	1
12	21	2

입출력 예 설명
입출력 예 #1

분수 7/20은 기약분수 입니다. 분모 20의 소인수가 2, 5 이기 때문에 유한소수입니다. 따라서 1을 return합니다.
입출력 예 #2

분수 11/22는 기약분수로 나타내면 1/2 입니다. 분모 2는 소인수가 2 뿐이기 때문에 유한소수 입니다. 따라서 1을 return합니다.
입출력 예 #3

분수 12/21는 기약분수로 나타내면 4/7 입니다. 분모 7은 소인수가 7 이므로 무한소수입니다. 따라서 2를 return합니다.

Hint
분자와 분모의 최대공약수로 약분하면 기약분수를 만들 수 있습니다.
정수도 유한소수로 분류합니다.
*/
function solution(a, b) {
  let gcd = getGcd(a,b)
  let pfs = getPrimeFactors(b/gcd)

  if(/[^25]/g.test(pfs.join(''))) return 2
  else return 1
}

function getPrimeFactors(num) {
  let pfs = []
  let div = 2

  while(num >= 2) {
      if(num%div===0) {
          pfs.push(div)
          num=num/div
      }
      else div++
  }

  return [...new Set(pfs)]
}

function getGcd(num1, num2) {
  let gcd = 1

  for(let i = 2; i <= Math.min(num1,num2); i++) {
      if(num1%i===0&&num2%i===0) {
          gcd = i
      }
  }

  return gcd
}

//정답 후 다른 사람의 풀이
//1. gcd를 구한다.
//2. 분모를 gcd로 나눈다. (기약분수)
//3. 2를 2 또는 5를 가지고 나머지가 0이 될 때까지 나눈다.
//3-1. 이때 모두 나누어지지 않으면 소인수 2,5외의 다른 수를 가진 것과 같고 무한소수이다.
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a,b); i++) {
      if (a%i===0 && b%i===0) n = i;
  }

  b/=n;
  while (b%2===0) b/=2;
  while (b%5===0) b/=5;

  return b === 1 ? 1 : 2;   
}