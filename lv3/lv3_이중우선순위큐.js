/*
힙(Heap) / 이중우선순위큐
*/
function solution(operations) {
  // MinHeap과 MaxHeap을 사용하여 최솟값과 최댓값을 관리
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  operations.forEach(operation => {
    // 명령어와 값을 분리
    const [command, value] = operation.split(' ');
    const num = parseInt(value, 10);

    if(command === 'I') {
      // 삽입 명령어: 두 힙에 값을 추가
      minHeap.push(num);
      maxHeap.push(num);
    } else if (command === 'D') {
      // 모두 빈 큐라면 수행하지 않음
      if(minHeap.size === 0 && maxHeap.size === 0) return;
      
      // 최댓값 삭제인 경우
      if(num === 1) {
        // 빈 큐라면 수행하지 않음
        if(maxHeap.size === 0) return;
        // MaxHeap에서 최댓값을 제거
        let max = maxHeap.pop();
        // 힙 동기화
        minHeap.sync(max);
      // 최솟값 삭제인 경우
      } else if (num === -1) {
        // 빈 큐라면 수행하지 않음
        if(minHeap.size === 0) return;
        // MinHeap에서 최솟값을 제거
        let min = minHeap.pop();
        // 힙 동기화
        maxHeap.sync(min);
      }
    }
  });

  // 두 힙이 모두 비어있을 때 결과
  if (minHeap.size === 0 && maxHeap.size === 0) {
    return [0, 0];
  }

  // 결과
  const min = minHeap.size ? minHeap.peek() : maxHeap.peek();
  const max = maxHeap.size ? maxHeap.peek() : minHeap.peek();

  return [max, min];
}

// 최소 힙 클래스 정의
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙에 값 추가
  push(num) {
    this.heap.push(num);
    // 값 추가 후 정렬
    this.heapifyUp(this.heap.length-1);
  }

  // 힙에서 최솟값 제거
  pop() {
    // 배열이 비었다면 아무 작업 안 함.
    if(this.heap.length === 0) return null;
    // 배열에 하나만 있다면 빼면서 반환
    if(this.heap.length === 1) return this.heap.pop();
    // 변수에 가장 작은 값을 저장
    const root = this.heap[0];
    // 배열 맨 뒤의 값을 빼서 맨 앞으로 이동
    this.heap[0] = this.heap.pop();
    // 힙 정렬
    this.heapifyDown(0);
    return root;
  }

  // 힙의 루트 값 조회
  peek() {
    return this.heap[0];
  }

  // 힙의 크기 조회
  get size() {
    return this.heap.length;
  }

  // 삭제 시 힙 동기화
  sync(value) {
    // 삭제되는 원소의 인덱스
    const index = this.heap.findIndex(v => v === value);
    if (index === -1) return; // 값이 힙에 없는 경우
    
    // 힙의 마지막 원소를 끌어 올림
    const lastValue = this.heap.pop();
    if (index < this.heap.length) {
      this.heap[index] = lastValue;
      // 힙 정렬
      this.heapifyDown(index);
    }
  }

  // 힙의 추가 작업: 위로 올라가기
  heapifyUp(index) {
    const parent = Math.floor((index-1) / 2);
    if(index > 0 && this.heap[index] < this.heap[parent]) {
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
      this.heapifyUp(parent);
    }
  }

  // 힙의 추가 작업: 아래로 내려가기
  heapifyDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;
    // 최솟값만 위로 올리기 때문에 하위 노드들의 정렬을 보장하지 않는다.
    if(left < this.heap.length && this.heap[left] && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if(right < this.heap.length && this.heap[right] && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if(smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }
}

// 최대 힙 클래스 정의
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 힙에 값 추가
  push(num) {
    this.heap.push(num);
    // 값 추가 후 정렬
    this.heapifyUp(this.heap.length-1);
  }

  // 힙에서 최댓값 제거
  pop() {
    // 배열이 비었다면 아무 작업 안 함.
    if(this.heap.length === 0) return null;
    // 배열에 하나만 있다면 빼면서 반환
    if(this.heap.length === 1) return this.heap.pop();
    // 변수에 가장 작은 값을 저장
    const root = this.heap[0];
    // 배열 맨 뒤의 값을 빼서 맨 앞으로 이동
    this.heap[0] = this.heap.pop();
    // 힙 정렬
    this.heapifyDown(0);
    return root;
  }

  // 힙의 루트 값 조회
  peek() {
    return this.heap[0];
  }

  // 힙의 크기 조회
  get size() {
    return this.heap.length;
  }

  // 삭제 시 힙 동기화
  sync(value) {
    // 삭제되는 원소의 인덱스
    const index = this.heap.findIndex(v => v === value);
    if (index === -1) return; // 값이 힙에 없는 경우
    
    // 힙의 마지막 원소를 끌어 올림
    const lastValue = this.heap.pop();
    if (index < this.heap.length) {
      this.heap[index] = lastValue;
      // 힙 정렬
      this.heapifyDown(index);
    }
  }

  // 힙의 추가 작업: 위로 올라가기
  heapifyUp(index) {
    const parent = Math.floor((index-1) / 2);
    if(index > 0 && this.heap[index] > this.heap[parent]) {
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
      this.heapifyUp(parent);
    }
  }

  // 힙의 추가 작업: 아래로 내려가기
  heapifyDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
    // 최댓값만 위로 올리기 때문에 하위 노드들의 정렬을 보장하지 않는다.
    if(left < this.heap.length && this.heap[left] && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if(right < this.heap.length && this.heap[right] && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if(largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapifyDown(largest);
    }
  }
}

//console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])) // [0,0]
//console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]))	// [333, -45]
//console.log(solution(["I 5", "D -1", "D 1", "D -1", "D 1"])) // [0, 0]
//console.log(solution(["I 1", "I 2", "I 3", "D -1", "D -1", "D 1", "I 4"])) // [4, 4]
//console.log(solution(["I 1", "I 2", "I 3", "D -1", "D -1", "D 1"])) // [0, 0]
//console.log(solution(["I 1", "I 2", "I 3", "D -1", "D 1"])) // [2, 2]
//console.log(solution(["I 1", "I 2", "I 3", "D -1", "D 1"])) // [2, 2]
//console.log(solution(["I 1", "D -1", "D 1"])) // [0, 0]
//console.log(solution(["D -1", "D 1"])) // [0, 0]
//console.log(solution(["I 1", "I 9", "I 2", "I 8", "D -1"])) // [9, 2]
//console.log(solution(["I 1", "I 1", "I 2", "I 2", "D -1", "D 1"])) // [2, 1]
//console.log(solution(["I 7", "I 7", "I 7",, "I 7", "D 1", "D -1", "D 1", "D -1", "D 1"])) // [0, 0]
//console.log(solution(["I 1", "I 3", "I 5", "I 7", "I 9", "D -1", "D -1", "D 1", "I 2", "D 1", "D 1"])) // [2, 2]
//console.log(solution(["I 0", "I 3", "I 5", "I -1", "I 9", "D -1", "D -1", "D 1", "I 2", "D 1", "D 1"])) // [3, 2]
console.log(solution(["I 0", "I -1"])) // [0, -1]