// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
    // 實作寫在這裡
    const numArr = [...num];
    console.log(numArr);
  }
  
  console.log(numberReducer(9527)) // 印出 5
  console.log(numberReducer(1450)) // 印出 1
  console.log(numberReducer(5566108)) // 印出 4
  console.log(numberReducer(1234567890)) // 印出 9