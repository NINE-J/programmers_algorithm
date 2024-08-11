/*
문제 설명
시침, 분침, 초침이 있는 아날로그시계가 있습니다. 시계의 시침은 12시간마다, 분침은 60분마다, 초침은 60초마다 시계를 한 바퀴 돕니다. 따라서 시침, 분침, 초침이 움직이는 속도는 일정하며 각각 다릅니다. 이 시계에는 초침이 시침/분침과 겹칠 때마다 알람이 울리는 기능이 있습니다. 당신은 특정 시간 동안 알람이 울린 횟수를 알고 싶습니다.

다음은 0시 5분 30초부터 0시 7분 0초까지 알람이 울린 횟수를 세는 예시입니다.
가장 짧은 바늘이 시침, 중간 길이인 바늘이 분침, 가장 긴 바늘이 초침입니다.
알람이 울리는 횟수를 세기 시작한 시각은 0시 5분 30초입니다.

이후 0시 6분 0초까지 초침과 시침/분침이 겹치는 일은 없습니다.
약 0시 6분 0.501초에 초침과 시침이 겹칩니다. 이때 알람이 한 번 울립니다.

이후 0시 6분 6초까지 초침과 시침/분침이 겹치는 일은 없습니다.
약 0시 6분 6.102초에 초침과 분침이 겹칩니다. 이때 알람이 한 번 울립니다.

이후 0시 7분 0초까지 초침과 시침/분침이 겹치는 일은 없습니다.
0시 5분 30초부터 0시 7분 0초까지는 알람이 두 번 울립니다. 이후 약 0시 7분 0.584초에 초침과 시침이 겹쳐서 울리는 세 번째 알람은 횟수에 포함되지 않습니다.

다음은 12시 0분 0초부터 12시 0분 30초까지 알람이 울린 횟수를 세는 예시입니다.

알람이 울리는 횟수를 세기 시작한 시각은 12시 0분 0초입니다.
초침과 시침, 분침이 겹칩니다. 이때 알람이 한 번 울립니다. 이와 같이 0시 정각, 12시 정각에 초침과 시침, 분침이 모두 겹칠 때는 알람이 한 번만 울립니다.

이후 12시 0분 30초까지 초침과 시침/분침이 겹치는 일은 없습니다.
12시 0분 0초부터 12시 0분 30초까지는 알람이 한 번 울립니다.

알람이 울리는 횟수를 센 시간을 나타내는 정수 h1, m1, s1, h2, m2, s2가 매개변수로 주어집니다. 이때, 알람이 울리는 횟수를 return 하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ h1, h2 ≤ 23
0 ≤ m1, m2 ≤ 59
0 ≤ s1, s2 ≤ 59
h1시 m1분 s1초부터 h2시 m2분 s2초까지 알람이 울리는 횟수를 센다는 의미입니다.
h1시 m1분 s1초 < h2시 m2분 s2초
시간이 23시 59분 59초를 초과해서 0시 0분 0초로 돌아가는 경우는 주어지지 않습니다.
입출력 예
h1	m1	s1	h2	m2	s2	result
0	5	30	0	7	0	2
12	0	0	12	0	30	1
0	6	1	0	6	6	0
11	59	30	12	0	0	1
11	58	59	11	59	0	1
1	5	5	1	5	6	2
0	0	0	23	59	59	2852
*/

// 시간을 타임스탬프 형식으로 변환해서 계산
// 시계: 360deg
// 1초: 6deg
// 1분: 6deg, 초당 0.1deg (1/60)
// 1시간: 30deg, 분당 0.5deg (6/12 -> 1/2 -> 0.5), 초당 0.0083333...deg (0.1/12 -> 1/120)

function solution(h1, m1, s1, h2, m2, s2) {
  let answer = 0
  let st = timeToSec(h1,m1,s1)
  let ed = timeToSec(h2,m2,s2)

  // 0시0분0초, 12시0분0초에서 시작하는 경우
  if(st === 0 || st === 43200) answer++

  while(st < ed) {
    let degs = getDegs(st)
    let newDegs = getDegs(++st)

    // 초침이 시침/분침을 둘 다 넘어갈때
    if(matchHHand(degs, newDegs) && matchMHand(degs, newDegs)) {
      // 시침/분침이 같을 땐 초침과 시침/분침이 모두 겹치므로 +1
      if(newDegs[0] === newDegs[1]) answer+=1
      // 시침/분침이 다를 땐 각각 지나는 것이므로 +2
      else answer+=2
      // 시침/분침을 각각 넘을땐 +1
    } else if(matchHHand(degs, newDegs) || matchMHand(degs, newDegs)) {
      answer+=1
    }
  }

  console.log(answer)
}

function timeToSec(h,m,s) {
  return h*3600+m*60+s
}

function getDegs(s) {
  let hours = parseInt(s/3600),
  minutes = parseInt(s%3600/60),
  seconds = parseInt(s%3600%60)

  let hdeg = hours%12*30 + minutes*0.5 + seconds*(1/120),
  mdeg = minutes*6 + seconds*(1/60),
  sdeg = seconds*6

  return [hdeg, mdeg, sdeg]
}
// 소수점으로 떨어지는 값이라서 정확한 비교가 어려움
// 초침이 시침/분침을 지나치는지 확인
function matchHHand (degs, newDegs) {
  if(degs[0] > degs[2] && newDegs[0] <= newDegs[2]) return true
  if(degs[2] === 354 && degs[0] > 354) return true
  return false
}

function matchMHand (degs, newDegs) {
  if(degs[1] > degs[2] && newDegs[1] <= newDegs[2]) return true
  if(degs[2] === 354 && degs[1] > 354) return true
  return false
}

solution(0,5,30,0,7,0); //2
solution(12,0,0,12,0,30) //1
solution(0,6,1,0,6,6) //0
solution(11,59,30,12,0,0) //1
solution(11,58,59,11,59,0) //1
solution(1,5,5,1,5,6) //2
solution(0,0,0,23,59,59) //2852
solution(23,59,58,23,59,59) //0

//정답 후 다른 사람의 풀이
//실행 속도가 0.1s 내외로 빠름.
//원으로 각도를 계산하는 것도 방법이지만 원을 굴린 선으로 생각해보는 방법도 있다.
function solution(h1, m1, s1, h2, m2, s2) {
  const getCount = (h, m, s) => {
    let [mCount, hCount] = [0, 0];

    mCount += h * 59;
    hCount += h * 60;

    let result = 0;

    mCount += m;
    hCount += m;
    result -= 1;

    const curMDegree = m * 6;
    const curHDegree = 30 * (h % 12) + 0.5 * m;
    const condition1 = curMDegree <= 5.9 * s;
    const condition2 = curHDegree <= (6 - 1 / 120) * s;

    if (condition1) mCount += 1;
    if (condition2) hCount += 1;

    if (h >= 12) {
      hCount -= 1;
      result -= 1;
    }

    result += mCount + hCount;

    return result;
  };

  let result = getCount(h2, m2, s2) - getCount(h1, m1, s1);
  if (s1 === 0 && m1 === 0) result += 1;

  return result;
}