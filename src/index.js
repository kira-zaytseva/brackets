module.exports = function check(str, bracketsConfig) {

  let openBrackets = Object.fromEntries(bracketsConfig);
  let closeBrackets = Object.keys(openBrackets).reduce((acc, rec) => {
    return {...acc, [openBrackets[rec]]: rec};
  }, {});

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (typeof openBrackets[symb] !== 'undefined') {
      stack.push(symb);
      // continue;
    }
    if (typeof closeBrackets[symb] !== 'undefined') {  
      const closingSymbol = stack.pop();  
      if (openBrackets[closingSymbol] !== symb) { 
        return false; 
        break;
      }  
    } 
  }

  return stack.length  === 0;
}