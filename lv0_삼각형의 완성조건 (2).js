/*
문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
입출력 예
sides	result
[1, 2]	1
[3, 6]	5
[11, 7]	13
입출력 예 설명
입출력 예 #1

두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.
입출력 예 #2

가장 긴 변이 6인 경우
될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 7, 8 로 2개입니다.
따라서 3 + 2 = 5를 return합니다.
입출력 예 #3

가장 긴 변이 11인 경우
될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
나머지 한 변이 가장 긴 변인 경우
될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
따라서 7 + 6 = 13을 return합니다.
*/
function solution(sides) {
  //긴 변(max), 추가될 변(new), 다른 변(other)
  //case1. max가 가장 긴 변인 삼각형이라면?
  //max-other < new <= max
  //case2. new가 가장 긴 변인 삼각형이라면?
  //max <= new < max+other
  //max-other < new < max+other 이렇게 정리가 되는 듯..?
  let answer = []

  sides.sort((a,b)=>a-b)

  for(let i = sides[1]-sides[0]+1; i < sides[1]+sides[0]; i++) {
      answer.push(i)
  }

  return answer.length
}

//정답 후 다른 사람의 풀이
//주어진 두 변의 길이를 a,b라고 할 때 a<=b라고 가정한다. (sort)
//1. c가 가장 긴 변이 아닌 경우
//b-a+1 <= c <= b
//2. c가 가장 긴 변인 경우
//b < c < a+b
//종합하면 b-a+1 <= c < a+b
//c가 b-a+1에서 a+b-1까지의 정수 범위에 포함되어야 하므로, 두 경계값을 포함한 길이를 계산
//따라서 가능한 정수의 개수는 a+b-1-(b-a+1)+1 여기서 마지막 +1은 양 끝 경계값을 포함하는 범위를 의미한다.
//정리하면 a+b-1-b+a-1+1 = 2a-1
function solution(sides) {
  return Math.min(...sides)*2-1
}