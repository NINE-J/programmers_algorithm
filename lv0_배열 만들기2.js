/*
문제 설명
정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

제한사항
1 ≤ l ≤ r ≤ 1,000,000

입출력 예
l	r	result
5	555	[5, 50, 55, 500, 505, 550, 555]
10	20	[-1]
*/

function solution(l, r) {
  //1. l부터 r까지 1씩 증가하는 등차수열 배열을 만듦
  //2. 0,5를 제외한 다른 숫자를 가졌다면 제외
  let arr = Array.from({length: r-l+1}, (_,i)=>l+i).filter(el=>!new RegExp('[^05]','g').test(el))
  
  return arr.length > 0 ? arr : [-1]
}