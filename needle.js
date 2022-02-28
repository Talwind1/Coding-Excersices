const strStr = function (haystack, needle) {
  let i = 0;
  let found = false;
  let indexStart = haystack.indexOf(needle[0]);
  let j = indexStart + 1;
  i++;
  while (!found && indexStart !== -1) {
    if (needle[i] === haystack[j]) {
      i++;
      j++;
      if (i === needle.length) {
        found = true;
      }
    } else {
      i = 0;
      indexStart = haystack.substring(indexStart).indexOf(needle[i]);
    }
  }
  return indexStart;
};

console.log(strStr("hello", "ll"));
