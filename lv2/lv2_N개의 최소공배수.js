/*
문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
입출력 예
arr	result
[2,6,8,14]	168
[1,2,3]	6
*/
//arr[0], arr[1]의 lcm을 구하고 구한 lcm과 arr[3]의 lcm을 구하고... arr의 끝까지 반복
function solution(arr) {
  let lcm = 1
  let i=0

  while(i < arr.length) {
    let gcd = getGcd(Math.max(arr[i], lcm), Math.min(arr[i], lcm))
    lcm = (lcm * arr[i])/gcd
    i++
  }

  return lcm
}

function getGcd(a,b) {
  let r
  while(a%b>0) {
    r=a%b
    a=b
    b=r
  }
  return b
}


/* 필요한 줄 알았는데 아니었네. 공부해씀. */
function isPrime(n) {
  let div = 2

  while(div < n) {
    if(n%div===0) return false
    div++
  }
  //음수, 0, 1은 소수가 아님
  //2는 while 실행 안 됨
  return n>1
}

function primeFactors(n) {
  //에라토스테네스의 체
  //임의의 자연수 n에 대해 그 이하의 소수를 모두 찾는, 가장 간단하고 빠른 방법
  let arr = Array(n+1).fill(true).fill(false, 0, 2) //0, 1은 소수가 아니므로 false
  
  //자연수 n이 √n보다 작은 소수들로 나누어 떨어지지 않으면 자연수 n은 소수이다.
  for(let i = 2; i < Math.sqrt(n); i++) {
    if(arr[i]) {
      //1보다 큰 모든 자연수는 소수의 곱으로 이루어져 있다.
      //i의 배수를 false로 변경
      for(let j = i*i; j <= n; j+=i) {
        arr[j] = false;
      }
    }
  }
  //arr = [false, false, true, true, false, ...]의 형태이므로 필요한 형태로 반환한다.
  return arr.map((v,i)=>v?i:0).filter(v=>v)
}

solution([10,10,10,10])//10
solution([2,6,8,14])//168
solution([1,2,3])//6
solution([100,20,24,12])//600