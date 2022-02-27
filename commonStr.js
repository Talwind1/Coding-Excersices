let common = "";
if (strs.every((str) => str.length > 0)) {
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((element) => element[i] === strs[0][i])) {
      common += strs[0][i];
    } else {
      return common;
    }
  }
}

return common;

//runtime:
//
