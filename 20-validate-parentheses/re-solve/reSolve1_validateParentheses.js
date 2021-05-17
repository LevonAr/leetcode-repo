// Big O
// Space: O(n)
// Time:O(n)

function isValid(s) {
  let stack = [];
  let hashMap = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      const topElement = stack ? stack.pop() : "#";
      if (topElement !== hashMap.get(s[i])) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  // issue here
  const returnValue = stack.length == 0 ? true : false;
  return returnValue;
}
