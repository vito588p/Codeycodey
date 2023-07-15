// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
    // 實作寫在這裡
  }
  
  const queue = new Queue()
  queue.enqueue(123)
  queue.enqueue(456)
  queue.enqueue()
  console.log(queue.length) // 印出 2
  
  const item = queue.dequeue() // 取出元素
  console.log(item) // 印出 123
  
  queue.dequeue() // 繼續取出元素
  console.log(queue.length) // 印出 0