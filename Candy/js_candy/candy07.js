// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
    const evenNum = numbers.filter((n) => n % 2 == 0);
    const oddNum = numbers.filter((n) => n % 2 != 0);
    if (evenNum.length == 1) {
      return evenNum[0];
    } else {
      return oddNum[0];
    };
  };
  
  console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
  console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160