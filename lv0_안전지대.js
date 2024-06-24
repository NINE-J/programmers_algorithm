function solution(board) {
  //1. board의 지뢰 위치를 bomb에 저장.
  //2. 구한 지뢰를 기준으로 주변 값을 바꾸는데, 존재하는 인덱스인지 판별 후 값 변경.
  //3. 값이 0인 인덱스 카운트 후 리턴.

  let mark = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]]
  let bomb = []
  let safeLand = 0;

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 1) {
        bomb.push([i,j])
      }
    }
  }

  for(let i = 0; i < bomb.length; i++) {
    for(let j = 0; j < mark.length; j++) {
      let curY = bomb[i][0] + mark[j][0]
      let curX = bomb[i][1] + mark[j][1]

      if(curY >= 0 && curY < board.length && curX >= 0 && curX < board[curY].length) board[curY][curX] += 1
    }
  }

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 0) safeLand++
    }
  }

  return safeLand
}

let test1 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	//16
let test2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	//13
let test3 = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	//0

console.log(solution(test1))
console.log(solution(test2))
console.log(solution(test3))


//정답 후 다른 사람의 풀이
//지뢰에 포커싱하지 않고 현지역 근처에 지뢰가 있는지 판별하는 방식
//Optional chaning, Double NOT으로 간결하게 표현
function solution(board) {

  let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
  let safezone = 0;

  board.forEach((row, y, self) => row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false : safezone++;
  }));

  return safezone;
}