// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
const randomNumber = (min = 0, max = 0) => {
    return Math.floor( Math.random() * (max - min) + min );
 }
 
 console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
 console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字÷