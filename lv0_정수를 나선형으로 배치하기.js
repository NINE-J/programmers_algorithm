/*
문제 설명
양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ n ≤ 30

입출력 예
| n	| result
| 4	| [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
| 5	| [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]

ex) n이 4일 때의 결과
행\열 |	0 | 1 | 2 | 3 |
-----------------------
0	| 1 | 2 | 3 | 4 |
-----------------------
1	| 12 | 13 |	14 | 5 |
-----------------------
2	| 11 | 16 | 15 | 6 |
-----------------------
3	| 10 | 9 | 8 | 7 |
-----------------------
*/

function solution(n) {
  let answer = [...Array(n)].map(e=>Array(n))
  let cur = 1
  let y = 0
  let x = 0
  let dir = 1
  //1=R, 2=D, 3=L, 4=U
  
  while(cur <= n*n) {
      answer[y][x] = cur++

      if(dir===1) {
          x+=1
          if(x>=n-1 || answer[y][x+1]>0) {
              dir=2
          }
      }
      else if(dir===2) {
          y+=1
          if(y>=n-1 || answer[y+1][x]>0) {
              dir=3
          }
      }
      else if(dir===3) {
          x-=1
          if(x<=0 || answer[y][x-1]>0) {
              dir=4
          }
      }
      else if(dir===4) {
          y-=1
          if(y<=0 || answer[y-1][x]>0) {
              dir=1
          }
      }
  }

  return answer
}

//정답 후 다른 사람의 풀이
// 방향을 4로 나눈 나머지로 간결하게 표현
// 방향 전환의 조건을 그룹
function solution(n) {
  const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const answer = Array.from(new Array(n), () => new Array(n).fill(0))
  let x = 0, y = 0, dir = 0, num = 1;
  while(num <= n * n) {
      answer[x][y] = num;
      let nextX = x + move[dir][0];
      let nextY = y + move[dir][1];
      if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
          dir = (dir + 1) % 4;
          nextX = x + move[dir][0];
          nextY = y + move[dir][1];
      }
      x = nextX;
      y = nextY;
      num ++;

  }
  return answer;
}