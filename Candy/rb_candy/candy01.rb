#編號：CANDY-001
#程式語言：Ruby
#題目：找出陣列裡最小的兩個值的總和
#例如：
#   [15, 28, 4, 2, 43] 印出 6
#   [23, 71, 33, 82, 1] 印出 24

def sumOfSmallestValues arr 
    # 實作程式碼寫在這裡
    arr.min(2).sum
end

p sumOfSmallestValues([19, 5, 42, 2, 77]) # 印出 7
p sumOfSmallestValues([23, 15, 59, 4, 17]) # 印出 19