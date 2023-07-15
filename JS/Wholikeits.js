//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

function likes(names) {
    const amount = names.length;
    
    switch (amount) {
        case 0:
          return `no one likes this`;
        break;
        
        case 1:
          return `${names[0]} likes this`;
        break;
        
        case 2:
          return `${names[0]} and ${names[1]} like this`
        break;
        
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break;
        
        default:
          return `${names[0]}, ${names[1]} and ${amount-2} like this`
    }
  }

  //高人
  function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }