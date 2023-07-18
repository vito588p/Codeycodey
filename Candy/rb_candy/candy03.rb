# 編號：CANDY-003
# 程式語言：Ruby
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

def moveZerosToEnd arr
  # 程式碼寫在這裡
  arr.reject { |el| el == 0 } + arr.select { |el| el == 0 }
end

p moveZerosToEnd([false, 1, 0, -1, 2, 0, 1, 3, "a"])
# 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]