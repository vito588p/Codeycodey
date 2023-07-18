# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

def uniqueOrder sequence
  # 實作寫在這裡
  if sequence.is_a?(String)
    sequence = sequence.chars
  end

  result = []
  preindex = nil
  

  for item in sequence
    if item != preindex
      result << item
      preindex = item
    end
  end
  result
end

p uniqueOrder("AABCC") # [ 'A', 'B', 'C']
p uniqueOrder("AAABBBCCBCC") # [ 'A', 'B', 'C', 'B', 'C']
p uniqueOrder([1, 2, 1, 2, 1]) # [ 1, 2, 1, 2, 1 ]
p uniqueOrder([1, 1, 1, 2, 2, 2, 1]) # [1, 2, 1]