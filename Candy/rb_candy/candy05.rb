# 編號：CANDY-005
# 程式語言：Ruby
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

def square_digits num 
  # 實作寫在這裡
  num.digits.map { |num| num ** 2 }.reverse.join
end

p square_digits(3212) # 印出 9414
p square_digits(2112) # 印出 4114
p square_digits(387) # 印出 96449