//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
    const splitW = word.split("");
    const obj = {};

    splitW.forEach(function(el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for (props in obj) {
        props === 1 ? props = "(" : props = ")";
    }
    return obj;
    
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @)"));

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 