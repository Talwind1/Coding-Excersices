const lengthOfLongestSubstring = function (s) {
  let longestTerm = "";
  const terms = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    let term = "";
    while (j < s.length) {
      if (term.indexOf(s[j]) > 0) {
        term += s[i];
      }
    }
  }
};
