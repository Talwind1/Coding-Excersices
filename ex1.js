function doubleChars(str) {
  //O(n)
  const map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] + 1 || 1;
    if (map[str[i]] > 1) {
      return false;
    }
  }
  return true;
}

//without additional data structures
function doubleChar(str) {
  //O(n)
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
