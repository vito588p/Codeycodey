# 編號：CANDY-006
# 程式語言：Ruby
# 題目：找出在數字陣列裡跟其它元素不一樣的值

def find_different numbers
  numbers.sort!

  if numbers.first == numbers[1]
    numbers.last
  else
    numbers.first
  end
end

puts find_different([1, 1, 1, 1, 3, 1, 1, 1]) # 印出 3
puts find_different([2, 2, 2, 4, 2, 2]) # 印出 4
puts find_different([8, 3, 3, 3, 3, 3, 3, 3]) # 印出 8