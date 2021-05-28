// BIG O
// Space: O(n)
// Time: O(n)
var isValid = function (s) {
  let hashTable = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // if closed parentheses
    if (hashTable.has(s[i])) {
      const topElement = stack.length == 0 ? "#" : stack.pop();
      if (hashTable.get(s[i]) !== topElement) {
        return false;
      }
    }
    // if open parantheses
    else {
      stack.push(s[i]);
    }
  }
  const validity = stack.length == 0 ? true : false;
  return validity;
};
