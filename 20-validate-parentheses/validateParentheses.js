function validateParenthese(string) {
  // initialize stack as array
  let stack = [];

  // make hashtable with close-open key-value pairs
  let hashTable = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < string.length; i++) {
    if (hashTable.has(string[i])) {
      let topElement = stack.length > 0 ? stack.pop() : "#";
      if (string[i] !== topElement) {
        return false;
      }
    } else {
      stack.push(string[i]);
    }
  }
  let returnValue = stack.length == 0 ? true : false;
  return returnValue;
}
