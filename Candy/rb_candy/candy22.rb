# 編號：CANDY-022
# 程式語言：Ruby
# 題目：實作 Queue 資料結構

class Queue
  #實作寫在這裡
  def initialize
    @queue = []
  end

  def enqueue(item)
    @queue.push(item) if item
  end

  def dequeue
    @queue.shift
  end

  def length
    @queue.length
  end
end
  
  
  queue = Queue.new
  queue.enqueue(123)
  queue.enqueue(456)
  queue.enqueue(nil)
  puts queue.length # 印出 2
  
  
  item = queue.dequeue # 取出元素
  puts item # 印出 123
  
  queue.dequeue # 繼續取出元素
  puts queue.length # 印出 0