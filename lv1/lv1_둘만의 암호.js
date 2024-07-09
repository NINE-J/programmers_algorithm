/*
문제 설명
두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.
예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.

제한사항
5 ≤ s의 길이 ≤ 50
1 ≤ skip의 길이 ≤ 10
s와 skip은 알파벳 소문자로만 이루어져 있습니다.
skip에 포함되는 알파벳은 s에 포함되지 않습니다.
1 ≤ index ≤ 20
입출력 예
s	skip	index	result
"aukks"	"wbqd"	5	"happy"
*/
function solution(s, skip, index) {
    let answer = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let ss of s) {
        let i = index
        let pointer = alphabet.indexOf(ss)
        
        while(i > 0) {
            pointer = ++pointer%alphabet.length
            if(skip.indexOf(alphabet[pointer]) < 0) i--
        }
        
        answer+=alphabet[pointer]
    }
    
    return answer
}

//정답 후 다른 사람의 풀이
//skip을 제외한 배열에서 다음 인덱스의 문자를 구하는 방법
//처음에 시도했었는데 제한 사항을 제대로 안 보고 이상한 반례로 테스트해서 포기했음 ㅋㅋ
//skip의 원소가 s에 들어있는 걸로 테스트를 해버려따.
//* skip에 포함되는 알파벳은 s에 포함되지 않습니다.
const solution = (s, skip, index) => {
    let ans = '';
    const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
      new RegExp(`[^${skip}]`, 'g'),
    );
    for (const c of s) {
      const newIdx = matched.indexOf(c) + index;
      ans += matched[newIdx % matched.length];
    }
    return ans;
  };