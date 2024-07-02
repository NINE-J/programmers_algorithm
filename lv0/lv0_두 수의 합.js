/*
문제 설명
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ a의 길이 ≤ 100,000
1 ≤ b의 길이 ≤ 100,000
a와 b는 숫자로만 이루어져 있습니다.
a와 b는 정수 0이 아니라면 0으로 시작하지 않습니다.
입출력 예
a	b	result
"582"	"734"	"1316"
"18446744073709551615"	"287346502836570928366"	"305793246910280479981"
"0"	"0"	"0"
입출력 예 설명
입출력 예 #1

예제 1번의 a, b는 각각 582, 734이고 582 + 734 = 1316입니다. 따라서 "1316"을 return 합니다.
입출력 예 #2

예제 2번의 a, b는 각각 18446744073709551615, 287346502836570928366이고 18446744073709551615 + 287346502836570928366 = 305793246910280479981입니다. 따라서 "305793246910280479981"을 return 합니다.
입출력 예 #3

예제 3번의 a, b는 각각 0, 0이고 0 + 0 = 0입니다. 따라서 "0"을 return 합니다.
*/

//경을 넘어 해의 단위를 계산하려니 JS에서 숫자 오류가 있다.
//BigInt 함수를 사용.
function solution(a, b) {
  return ''+(BigInt(a)+BigInt(b))
}

//정답 후 다른 사람의 풀이
function solution(a, b) {
  a = [...a];
  b = [...b];
  let answer = [];

  let next = 0;
  while(a.length && b.length) {
      let _a = +a.pop();
      let _b = +b.pop();
      let sum = _a + _b + next;

      if(sum >= 10) {
          sum -= 10;
          next = 1;
      } else
          next = 0;

      answer.push(sum);
  }

  let rest = a.length ? a : b;
  while(rest.length) {
      let sum = +rest.pop() + next;
      if(sum >= 10) {
          sum -= 10;
          next = 1;
} else
          next = 0;

      answer.push(sum);
  }

  if(next)
      answer.push(next);

  return answer.reverse().join("");
}