# 編號：CANDY-021
# 程式語言：Ruby
# 題目：實作 Stack 資料結構

class Stack 
  # 實作寫在這裡
  def initialize
    @stack = []
  end

  def push(item)
      @stack.push(item) if item
  end

  def size
    @stack.length
  end

  def pop
    @stack.pop
  end
end

stack = Stack.new
stack.push(123)
stack.push(456)
stack.push(nil)
puts stack.size # 印出 2

item = stack.pop() # 取出元素
puts item # 印出 456

stack.pop() # 繼續取出元素
puts stack.size # 印出 0