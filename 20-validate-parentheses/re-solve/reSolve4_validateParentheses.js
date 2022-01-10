/**
 * @param {string} s
 * @return {boolean}
 */ ``;
var isValid = function (s) {
  const hashMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (let i = 0; i < s.length; s++) {
    if (s[i] in hashMap) {
      const topElement = stack.pop();
      if (hashMap[s(i)] == topElement) {
        continue;
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  console.log("stack", stack);
  if (stack.length == 0) {
    return true;
  }
};
