function solution(num, total) {
  /*
  1. 연속된 수.. 시작과 끝을 어떻게 정하지?
  2. total을 현재 항으로 시작, 1씩 감소하는 반복문 내에서
  현재 항의 값을 감소시키며 total-i... num만큼 진행
  total에서 num만큼 진행하며 현재항을 뺐을 때 0이 되지 않는다면
  시작 값을 total-i로 하여 반복 

  등차수열의 첫째항a부터 제n항까지의 합 Sn
  첫째항과 제n항을 알 때 S=n(a+l)/2
  첫째항과 공차를 알 때 S=n(2a+(n-1)d)/2

  주어진 조건은 총합total = total, 총 항의 수 = num, 공차d = 1, 구해야 하는 건 첫째항a
  total = n(2a+(n-1)d)/2
  2total = n(2a+(n-1)d)
  2total/n = 2a+(n-1)d
  2total/n-(n-1)d = 2a
  (2total/n-(n-1)d)/2 = a
  */

  let answer = []
  let st = ((2*total)/num-(num-1)*1)/2

  for(let i = 0; i < num; i++) {
    answer.push(st+i)
  }

  return answer
}

let testCase = [
  {param: [3,12], answer: [3,4,5]},
  {param: [5,15], answer: [1,2,3,4,5]},
  {param: [4,14], answer: [2,3,4,5]},
  {param: [5,5], answer: [-1,0,1,2,3]},
  {param: [5,0], answer: [-2,-1,0,1,2]},
  {param: [3,153], answer: [50,51,52]},
  {param: [1,1000], answer: [1000]},
  {param: [3,0], answer: [-1,0,1]}
]

for(let test of testCase) {
  console.log(JSON.stringify(solution(...test.param)) == JSON.stringify(test.answer))
}