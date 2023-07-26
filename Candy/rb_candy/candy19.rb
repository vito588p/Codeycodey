# 編號：CANDY-019
# 程式語言：Ruby
# 題目：檢查是否為某個數字的平方數

def is_square num
  # 實作寫在這裡
  return false if num < 0
  
  Math.sqrt(num) % 1 == 0
end

p is_square(0) # true
puts is_square(4) # true
puts is_square(5) # false
puts is_square(100) # true
puts is_square(-4) # false
puts is_square(-1) # false