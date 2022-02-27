const validParethesis = (s) => {
  const order = { ")": "(", "]": "[", "}": "{" };
  const keeper = [];
  if (s.length % 2 !== 0) {
    return false;
  } else {
    let i = 0;
    let isValid = true;
    while (i < s.length && isValid) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        keeper.push(s[i]);
      } else {
        isValid = order[s[i]] === keeper.pop();
      }
    }
    return isValid;
  }
};
console.log(validParethesis("()"));
