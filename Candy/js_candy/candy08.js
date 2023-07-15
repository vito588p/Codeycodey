// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const words = input.split(" ");
  let mainScore = 0;
  let result = "";

  for (let i = 0; i < words.length; i++){
    const word = words[i];
    let addUp = 0;

    for (let j = 0; j < word.length; j++){
      const letter = word[j];
      addUp = addUp + letter.charCodeAt(0) - 96;
    }
    
    if (addUp > mainScore) {
      mainScore = addUp;
      result = word;
    }
  }

  return result;  
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there