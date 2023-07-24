# 編號：CANDY-008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highest_scoreWord input
  input.split.max_by do |word|
    word.chars.sum { |letter| letter.ord - 96 }
  end
end

puts highest_scoreWord("lorem ipsum dolor sit amet") # 印出 ipsum
puts highest_scoreWord("heyn i need a rubygem up to build this") # 印出 rubygem
puts highest_scoreWord("in time machine there are some bugs") # 印出 there