// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
    return Array.from((String(num)), n => n * n ).join("");
  };
  
  console.log(squareDigits(3212)) // 印出 9414
  console.log(squareDigits(2112)) // 印出 4114
  console.log(squareDigits(387)) // 印出 96449