/**
 * @param {string} s
 * @return {boolean}
 */

// (){(}
var isValid = function (s) {
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let currentOpen = [];
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in hashMap)) {
      let topElement = currentOpen.pop();
      if (hashMap[topElement] !== s[i]) return false;
    } else currentOpen.push(s[i]);
  }
  if (currentOpen.length == 0) {
    return true;
  } else {
    return false;
  }
};
