/*
문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0
입출력 예 설명
입출력 예 #1

[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
입출력 예 #2

[10, 29]에는 7이 없으므로 0을 return 합니다.
*/
function solution(array) {
  let answer = 0
  
  for(let i = 0; i < array.length; i++) {
      let cur = (''+array[i]).split('')
      
      for(let j = 0; j < cur.length; j++) {
          if(cur[j]/1 === 7) answer++
      }
  }
  
  return answer
}
//정답 후 다른 사람의 풀이
//7로 나눈 배열의 길이-1
function solution(array) {
  return array.join('').split('7').length-1;
}