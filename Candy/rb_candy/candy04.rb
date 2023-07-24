# 編號：CANDY-004
# 程式語言：Ruby
# 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

def humanReadableTimer seconds
  # 實作在這裡
  # Time.at(seconds).strftime("%H:%M:%S")
  hrs = seconds / 3600
  mins = seconds % 3600 / 60
  secs = seconds % 3600 % 60
  
  format("%02d:%02d:%02d", hrs, mins, secs)
end

puts humanReadableTimer(0) # 印出 00:00:00
puts humanReadableTimer(59) # 印出 00:00:59
puts humanReadableTimer(60) # 印出 00:01:00
puts humanReadableTimer(90) # 印出 00:01:30
puts humanReadableTimer(3599) # 印出 00:59:59
puts humanReadableTimer(3600) # 印出 01:00:00
puts humanReadableTimer(45296) # 印出 12:34:56
puts humanReadableTimer(86399) # 印出 23:59:59
puts humanReadableTimer(86400) # 印出 24:00:00
puts humanReadableTimer(359999) # 印出 99:59:59