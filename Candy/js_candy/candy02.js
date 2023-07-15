// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
    let n = chars.length;
    let realTotal = 0;
    for (let i = 0; i < n; i++){
        realTotal = realTotal + (chars[i].charCodeAt(0));
    }

    let firstChar = chars[0].charCodeAt(0);
    let assumeTotal = 0;
    for(let i = 0; i < n + 1; i++){
        assumeTotal = assumeTotal + (firstChar + i);
    }
    return String.fromCharCode(assumeTotal - realTotal);
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...