function validateParenthese(string) {
  // Initialize stack as array
  let stack = [];

  // Make hashtable with close-open key-value pairs. This keeps code clean and makes adding more types of parenthesis easier
  let hashTable = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < string.length; i++) {
    // If the character is an closing bracket
    if (hashTable.has(string[i])) {
      // Pop the topmost element from the stack, if it is non empty otherwise assign dummy "#"
      let topElement = stack.length > 0 ? stack.pop() : "#";
      // If the mapping for the opening bracket in our hash and the top element of the stack don't match, return False
      if (topElement !== hashTable.get(string[i])) {
        return false;
      }
    }
    // If we have an opening bracket, simply push it onto the stack.
    else {
      stack.push(string[i]);
    }
  }

  //In the end, if the stack is empty, then we have a valid expression.
  let returnValue = stack.length == 0 ? true : false;
  return returnValue;
}
