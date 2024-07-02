/*
문제 설명
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 1000
1 ≤ pat ≤ 10
입출력 예
myString	pat	result
"banana"	"ana"	2
"aaaa"	"aa"	3
입출력 예 설명
입출력 예 #1

"banana"에서 1 ~ 3번 인덱스에서 한 번, 3 ~ 5번 인덱스에서 또 한 번 "ana"가 등장해서 총 두 번 등장합니다. 따라서 2를 return 합니다.
입출력 예 #2

"aaaa"에서 0 ~ 2번 인덱스에서 한 번, 1 ~ 3번 인덱스에서 한 번, 2 ~ 4번 인덱스에서 한 번 "aa"가 등장해서 총 세 번 등장합니다. 따라서 3을 return 합니다.
*/
function solution(myString, pat) {
  let answer = 0
  let st = myString.indexOf(pat)

  for(let i = st; i <= myString.length-pat.length; i++) {
      if(myString.substring(i).indexOf(pat) === 0) answer++
  }

  return answer
}

//정답 후 다른 사람의 풀이
//ㅏㅏ~ 정규식 나아~이스
//"1pt 2px 3em 4px" 이와 같은 문자열에서 단위가 px인 것의 숫자를 얻으려고 할 때 정규식 "/\d(?=px)/g"을 사용할 수 있다. 그럼 [2,4]를 얻을 수 있다.
//pat를 단위라고 보고 동일하게 정규식 match를 실행하면 ['','',''] 형태의 배열이나 찾는 값이 없는 경우 null을 얻을 수 있다.
function solution(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g")
  return myString.match(reg)?.length || 0;
}