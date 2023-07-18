# 編號：CANDY-002
# 程式語言：Ruby
# 題目：請寫一小段程式，印出連續陣列裡缺少的字元

def missingChar chars
  # 實作寫在這裡
  [*chars[0]..chars[-1]] - chars
end

puts missingChar(["a", "b", "c", "d", "f", "g"]) # 印出 e
puts missingChar(["O", "Q", "R", "S"]) # 印出 P

# 提示：
# 可使用字串的 charCodeAt 方法...