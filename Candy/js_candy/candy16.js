// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
    // 實作寫在這裡
    const findSnake = str.indexOf("_");
  
    if (findSnake === -1){
      return str;
    };
  
    if (findSnake > 0){
      return str.replace(/_([a-z])/g, (underline, firsrChar) => {
        return firsrChar.toUpperCase();
      })
    };
};
  
console.log(toCamelCase("book")) // book
console.log(toCamelCase("book_store")) // bookStore
console.log(toCamelCase("get_good_score")) // getGoodScore